export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      app: {
        title: `Cayan`,
        description: ``,
        dir: `ltr`,
        ar: `عربي`,
        en: `English`
      },

      nav: {
        home: `Home`,
        aboutUs:'About Cayan',
      },

      home: {
        intro_title: 'Intro Title',
      }
    })
  })
}
