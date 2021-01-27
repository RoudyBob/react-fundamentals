var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[d.getMonth()];
var year = d.getFullYear();

const Footer = () => {
    return (
        <div class="footer">
            <p>This is a footer. Copyright {month} {year}.</p>
        </div>
    )
}

export default Footer;