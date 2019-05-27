import io.github.bonigarcia.wdm.WebDriverManager
import org.openqa.selenium.chrome.ChromeDriver

baseUrl = System.getProperty('geb.build.baseUrl') ?: 'http://localhost:3000'

driver = {
    WebDriverManager.chromedriver().setup()
    new ChromeDriver()
}

waiting {
    timeout = 5
}
