"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, X } from "lucide-react";

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex bg-primary p-1 rounded-lg shadow-sm">
                        <LogOut className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-slate-900">
                        EXIT HACK
                    </span>
                    <span className="ml-2 rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] text-slate-400">
                        広告
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/#ranking"
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        おすすめ業者
                    </Link>
                    <Link
                        href="/compare"
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        徹底比較
                    </Link>
                    <Link
                        href="/columns"
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        お役立ちコラム
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="default" size="sm" className="hidden sm:inline-flex bg-primary hover:bg-blue-800 text-white shadow-md" asChild>
                        <Link href="/#diagnosis">退職リスク診断</Link>
                    </Button>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                        aria-label="メニューを開く"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
                    <div className="container mx-auto px-4 py-4 space-y-1">
                        <Link
                            href="/#ranking"
                            className="block px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            おすすめ業者
                        </Link>
                        <Link
                            href="/compare"
                            className="block px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            徹底比較
                        </Link>
                        <Link
                            href="/columns"
                            className="block px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-primary transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            お役立ちコラム
                        </Link>
                        <div className="pt-3 border-t border-slate-100">
                            <Button variant="default" size="sm" className="w-full bg-primary hover:bg-blue-800 text-white" asChild>
                                <Link href="/#diagnosis" onClick={() => setOpen(false)}>退職リスク診断</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
