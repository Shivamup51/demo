'use client'

import Footer from "@/components/Footer";

const BlogsLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {children}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default BlogsLayout;