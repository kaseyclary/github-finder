function Footer() {
    const footerYear = new Date().getFullYear()
    return (
        <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
            <div>

            </div>
            <p> Copyright &copy; {footerYear}, all rights reserved</p>
        </footer>
    )
}

export default Footer
