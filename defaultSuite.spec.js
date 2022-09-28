// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Default Suite', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('TestComplet', async function() {
    await driver.get("http://localhost:4200/login")
    await driver.manage().window().setRect({ width: 1366, height: 728 })
    await driver.findElement(By.css(".form-group:nth-child(1) > .form-control")).click()
    await driver.findElement(By.xpath("//input[@type=\'email\']")).sendKeys("admin@admin.com")
    await driver.findElement(By.css(".ng-untouched")).click()
    await driver.findElement(By.xpath("//input[@type=\'password\']")).sendKeys("123456")
    await driver.findElement(By.css(".ng-untouched")).sendKeys(Key.ENTER)
    await driver.findElement(By.linkText("Ajouter un salarié")).click()
    await driver.findElement(By.id("role")).click()
    {
      const dropdown = await driver.findElement(By.id("role"))
      await dropdown.findElement(By.xpath("//option[. = 'User']")).click()
    }
    await driver.findElement(By.css(".profile-connexion > .row .ng-valid")).click()
    await driver.findElement(By.xpath("//input[@type=\'email\']")).sendKeys("ahlem.haboubi@gmail.com")
    await driver.findElement(By.css(".col-md-6 > .ng-invalid")).click()
    await driver.findElement(By.xpath("//input[@type=\'password\']")).sendKeys("123456")
    await driver.findElement(By.css(".profile-basic:nth-child(2) .form-group:nth-child(1) > .form-control")).click()
    await driver.findElement(By.xpath("//input[@type=\'text\']")).sendKeys("Mat-01")
    await driver.findElement(By.css(".profile-basic:nth-child(2) .form-group:nth-child(2) > .form-control")).click()
    await driver.findElement(By.xpath("(//input[@type=\'text\'])[2]")).sendKeys("07441256")
    await driver.findElement(By.css(".profile-basic:nth-child(2) .has-error > .form-control")).click()
    await driver.findElement(By.xpath("(//input[@type=\'text\'])[3]")).sendKeys("Ing-BI")
    await driver.findElement(By.css(".has-error:nth-child(1) > .form-control")).click()
    await driver.findElement(By.xpath("(//input[@type=\'text\'])[4]")).sendKeys("Haboubi")
    await driver.findElement(By.css(".has-error:nth-child(2) > .form-control")).click()
    await driver.findElement(By.xpath("(//input[@type=\'text\'])[5]")).sendKeys("Ahlem")
    await driver.findElement(By.css(".has-error > .form-control")).click()
    await driver.findElement(By.id("taillePull")).click()
    {
      const dropdown = await driver.findElement(By.id("taillePull"))
      await dropdown.findElement(By.xpath("//option[. = 'S']")).click()
    }
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.executeScript("window.scrollTo(0,2197)")
    await driver.findElement(By.css(".user-link")).click()
    await driver.findElement(By.linkText("Déconnexion")).click()
    await driver.findElement(By.css(".form-group:nth-child(1) > .form-control")).click()
    await driver.findElement(By.xpath("//input[@type=\'email\']")).sendKeys("ahlem.haboubi@gmail.com")
    await driver.findElement(By.css(".ng-untouched")).click()
    await driver.findElement(By.xpath("//input[@type=\'password\']")).sendKeys("123456")
    await driver.findElement(By.css(".ng-untouched")).sendKeys(Key.ENTER)
    await driver.findElement(By.id("taillePull")).click()
    {
      const dropdown = await driver.findElement(By.id("taillePull"))
      await dropdown.findElement(By.xpath("//option[. = 'L']")).click()
    }
    await driver.findElement(By.id("situationFamiliale")).click()
    {
      const dropdown = await driver.findElement(By.id("situationFamiliale"))
      await dropdown.findElement(By.xpath("//option[. = 'Célibataire']")).click()
    }
    await driver.findElement(By.id("proches1")).click()
    await driver.findElement(By.css(".col-md-12:nth-child(1) > .row > .form-group:nth-child(1) > .form-control")).click()
    await driver.findElement(By.xpath("(//input[@type=\'text\'])[11]")).sendKeys("Manar 2")
    await driver.findElement(By.css(".col-md-12:nth-child(1) > .row > .form-group:nth-child(2) > .form-control")).click()
    await driver.findElement(By.xpath("(//input[@type=\'text\'])[12]")).sendKeys("Tunis")
    await driver.findElement(By.css(".col-md-12:nth-child(1) > .row .ng-untouched")).click()
    await driver.findElement(By.xpath("(//input[@type=\'text\'])[13]")).sendKeys("9092")
    await driver.findElement(By.css(".col-md-12:nth-child(3) .col-md-4:nth-child(1) > .form-control")).click()
    await driver.findElement(By.xpath("(//input[@type=\'text\'])[17]")).sendKeys("23456123")
    await driver.findElement(By.id("passeportSanitaire1")).click()
    await driver.findElement(By.id("antecedentMaladie1")).click()
    await driver.findElement(By.id("activites")).click()
    await driver.findElement(By.id("activitesExemple")).click()
    await driver.findElement(By.xpath("//textarea[@id=\'activitesExemple\']")).sendKeys("sport")
    await driver.findElement(By.id("niveauEtude")).click()
    {
      const dropdown = await driver.findElement(By.id("niveauEtude"))
      await dropdown.findElement(By.xpath("//option[. = 'Bac+5']")).click()
    }
    await driver.findElement(By.css(".btn > .ng-star-inserted")).click()
    await driver.executeScript("window.scrollTo(0,1802)")
    await driver.findElement(By.linkText("Mon profile")).click()
    await driver.findElement(By.linkText("Modifier mon profile")).click()
    await driver.findElement(By.css(".img-circle")).click()
    await driver.findElement(By.linkText("Déconnexion")).click()
    await driver.findElement(By.css(".form-group:nth-child(1) > .form-control")).click()
    await driver.findElement(By.xpath("//input[@type=\'email\']")).sendKeys("admin@admin.com")
    await driver.findElement(By.css(".ng-untouched")).click()
    await driver.findElement(By.xpath("//input[@type=\'password\']")).sendKeys("123456")
    await driver.findElement(By.css(".ng-untouched")).sendKeys(Key.ENTER)
    await driver.findElement(By.css(".fa-eye")).click()
    await driver.findElement(By.css(".modal")).click()
    {
      const dropdown = await driver.findElement(By.css(".ng-untouched:nth-child(2)"))
      await dropdown.findElement(By.xpath("//option[. = 'Validé']")).click()
    }
  })
})
