const utils = require("./utils.js");
const tests = {};
tests["Test"] = async (driver, vars, opts = {}) => {
  await driver.get("http://localhost:4200/login");
  await driver.wait(until.elementLocated(By.xpath(`//input[@type=\'emailxxxxxx\']`)), configuration.timeout);
  await driver.findElement(By.xpath(`//input[@type=\'emailxxxxxx\']`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`admin@admin.com`);
    });
  });
  await driver.wait(until.elementLocated(By.xpath(`//input[@type=\'password\']`)), configuration.timeout);
  await driver.findElement(By.xpath(`//input[@type=\'password\']`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`123456`);
    });
  });
  await driver.wait(until.elementLocated(By.xpath(`//button[contains(.,\'Login\')]`)), configuration.timeout);
  await driver.findElement(By.xpath(`//button[contains(.,\'Login\')]`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.xpath(`//a[contains(text(),\'My profile\')]`)), configuration.timeout);
  await driver.findElement(By.xpath(`//a[contains(text(),\'My profile\')]`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`TaillePull`)), configuration.timeout);
  await driver.findElement(By.name(`TaillePull`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`TaillePull`)), configuration.timeout);
  await driver.findElement(By.name(`TaillePull`)).then(element => {
    return element.findElement(By.xpath(`//option[. = 'L']`)).then(option => {
      return option.click();
    });
  });
  await driver.wait(until.elementLocated(By.xpath(`//button[@id=\'valider\']`)), configuration.timeout);
  await driver.findElement(By.xpath(`//button[@id=\'valider\']`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.img-circle`)), configuration.timeout);
  await driver.findElement(By.css(`.img-circle`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.linkText(`Logout`)), configuration.timeout);
  await driver.findElement(By.linkText(`Logout`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.xpath(`//input[@type=\'email\']`)), configuration.timeout);
  await driver.findElement(By.xpath(`//input[@type=\'email\']`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`admin@admin.com`);
    });
  });
  await driver.wait(until.elementLocated(By.xpath(`//input[@type=\'password\']`)), configuration.timeout);
  await driver.findElement(By.xpath(`//input[@type=\'password\']`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`123`);
    });
  });
  await driver.wait(until.elementLocated(By.css(`.form-group:nth-child(1) > .form-control`)), configuration.timeout);
  await driver.findElement(By.css(`.form-group:nth-child(1) > .form-control`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`wafa@gmail.com`);
    });
  });
  await driver.wait(until.elementLocated(By.xpath(`//div/div`)), configuration.timeout);
  await driver.findElement(By.xpath(`//div/div`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.form-group:nth-child(2) > .form-control`)), configuration.timeout);
  await driver.findElement(By.css(`.form-group:nth-child(2) > .form-control`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`123`);
    });
  });
  await driver.wait(until.elementLocated(By.css(`.form-group:nth-child(2) > .form-control`)), configuration.timeout);
  await driver.findElement(By.css(`.form-group:nth-child(2) > .form-control`)).then(element => {
    return element.sendKeys(Key["ENTER"]);
  });
  await driver.wait(until.elementLocated(By.id(`NumeroCIN`)), configuration.timeout);
  await driver.findElement(By.id(`NumeroCIN`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`NumeroCIN`)), configuration.timeout);
  await driver.findElement(By.id(`NumeroCIN`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`07456123`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`Poste`)), configuration.timeout);
  await driver.findElement(By.id(`Poste`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`Poste`)), configuration.timeout);
  await driver.findElement(By.id(`Poste`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`Assistante`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`DateEmbauche`)), configuration.timeout);
  await driver.findElement(By.id(`DateEmbauche`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.bs-datepicker-container`)), configuration.timeout);
  await driver.findElement(By.css(`.bs-datepicker-container`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`TaillePull`)), configuration.timeout);
  await driver.findElement(By.name(`TaillePull`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`TaillePull`)), configuration.timeout);
  await driver.findElement(By.name(`TaillePull`)).then(element => {
    return element.findElement(By.xpath(`//option[. = 'XL']`)).then(option => {
      return option.click();
    });
  });
  await driver.wait(until.elementLocated(By.name(`SituationFamiliale`)), configuration.timeout);
  await driver.findElement(By.name(`SituationFamiliale`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`SituationFamiliale`)), configuration.timeout);
  await driver.findElement(By.name(`SituationFamiliale`)).then(element => {
    return element.findElement(By.xpath(`//option[. = 'Marié(e)']`)).then(option => {
      return option.click();
    });
  });
  await driver.wait(until.elementLocated(By.name(`NomConjoint`)), configuration.timeout);
  await driver.findElement(By.name(`NomConjoint`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`NomConjoint`)), configuration.timeout);
  await driver.findElement(By.name(`NomConjoint`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`Trabelsi`);
    });
  });
  await driver.wait(until.elementLocated(By.name(`PrenomConjoint`)), configuration.timeout);
  await driver.findElement(By.name(`PrenomConjoint`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`PrenomConjoint`)), configuration.timeout);
  await driver.findElement(By.name(`PrenomConjoint`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`Rafik`);
    });
  });
  await driver.wait(until.elementLocated(By.name(`DateNaissanceConjoint`)), configuration.timeout);
  await driver.findElement(By.name(`DateNaissanceConjoint`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.current:nth-child(3) > span`)), configuration.timeout);
  await driver.findElement(By.css(`.current:nth-child(3) > span`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`NumeroTelephoneConjoint`)), configuration.timeout);
  await driver.findElement(By.name(`NumeroTelephoneConjoint`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`NumeroTelephoneConjoint`)), configuration.timeout);
  await driver.findElement(By.name(`NumeroTelephoneConjoint`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`28789412`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`nbrenfants`)), configuration.timeout);
  await driver.findElement(By.id(`nbrenfants`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`nbrenfants`)), configuration.timeout);
  await driver.findElement(By.id(`nbrenfants`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`2`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`procheNon`)), configuration.timeout);
  await driver.findElement(By.id(`procheNon`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`AdressN1`)), configuration.timeout);
  await driver.findElement(By.name(`AdressN1`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`AdressN1`)), configuration.timeout);
  await driver.findElement(By.name(`AdressN1`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`Jardin Menzah 2`);
    });
  });
  await driver.wait(until.elementLocated(By.name(`VilleN1`)), configuration.timeout);
  await driver.findElement(By.name(`VilleN1`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`VilleN1`)), configuration.timeout);
  await driver.findElement(By.name(`VilleN1`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`Aryana`);
    });
  });
  await driver.wait(until.elementLocated(By.name(`CodePostalN1`)), configuration.timeout);
  await driver.findElement(By.name(`CodePostalN1`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`CodePostalN1`)), configuration.timeout);
  await driver.findElement(By.name(`CodePostalN1`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`9015`);
    });
  });
  await driver.wait(until.elementLocated(By.name(`AdresseN2`)), configuration.timeout);
  await driver.findElement(By.name(`AdresseN2`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`AdresseN2`)), configuration.timeout);
  await driver.findElement(By.name(`AdresseN2`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`Aryana`);
    });
  });
  await driver.wait(until.elementLocated(By.name(`VilleN2`)), configuration.timeout);
  await driver.findElement(By.name(`VilleN2`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`VilleN2`)), configuration.timeout);
  await driver.findElement(By.name(`VilleN2`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`Aryana`);
    });
  });
  await driver.wait(until.elementLocated(By.name(`CodePostalN2`)), configuration.timeout);
  await driver.findElement(By.name(`CodePostalN2`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`CodePostalN2`)), configuration.timeout);
  await driver.findElement(By.name(`CodePostalN2`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`2019`);
    });
  });
  await driver.wait(until.elementLocated(By.name(`Email`)), configuration.timeout);
  await driver.findElement(By.name(`Email`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`Email`)), configuration.timeout);
  await driver.findElement(By.name(`Email`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`wafa@gmail.com`);
    });
  });
  await driver.wait(until.elementLocated(By.name(`NumeroTelephoneN1`)), configuration.timeout);
  await driver.findElement(By.name(`NumeroTelephoneN1`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`NumeroTelephoneN1`)), configuration.timeout);
  await driver.findElement(By.name(`NumeroTelephoneN1`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`52654785`);
    });
  });
  await driver.wait(until.elementLocated(By.name(`NumeroTelephoneN2`)), configuration.timeout);
  await driver.findElement(By.name(`NumeroTelephoneN2`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`NumeroTelephoneN2`)), configuration.timeout);
  await driver.findElement(By.name(`NumeroTelephoneN2`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`28741256`);
    });
  });
  await driver.wait(until.elementLocated(By.css(`.card-box:nth-child(10) > .row > .col-md-1 #procheNon`)), configuration.timeout);
  await driver.findElement(By.css(`.card-box:nth-child(10) > .row > .col-md-1 #procheNon`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.col-md-6 #procheNon`)), configuration.timeout);
  await driver.findElement(By.css(`.col-md-6 #procheNon`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.card-box:nth-child(11) #procheNon`)), configuration.timeout);
  await driver.findElement(By.css(`.card-box:nth-child(11) #procheNon`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`NiveauEtude`)), configuration.timeout);
  await driver.findElement(By.name(`NiveauEtude`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.name(`NiveauEtude`)), configuration.timeout);
  await driver.findElement(By.name(`NiveauEtude`)).then(element => {
    return element.findElement(By.xpath(`//option[. = 'Bac+1']`)).then(option => {
      return option.click();
    });
  });
  await driver.wait(until.elementLocated(By.id(`valider`)), configuration.timeout);
  await driver.findElement(By.id(`valider`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`valider`)), configuration.timeout);
  await driver.findElement(By.id(`valider`)).then(element => {
    return driver.actions({
      bridge: true
    }).move({
      origin: element
    }).perform();
  });
  await driver.actions({
    bridge: true
  }).move({
    x: 0,
    y: 0
  }).perform();
  await driver.wait(until.elementLocated(By.linkText(`My profile`)), configuration.timeout);
  await driver.findElement(By.linkText(`My profile`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.img-circle`)), configuration.timeout);
  await driver.findElement(By.css(`.img-circle`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.linkText(`Logout`)), configuration.timeout);
  await driver.findElement(By.linkText(`Logout`)).then(element => {
    return element.click();
  });
}
module.exports = tests;