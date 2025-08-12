"use client"
import Footer from "@/components/Footer"

const ServiceLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default ServiceLayout;