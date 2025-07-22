"use client"
import Footer from "@/components/Footer"

const ServiceLayout = ({ children }) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}

export default ServiceLayout;