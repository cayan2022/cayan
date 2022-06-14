export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      app: {
        title: `كيان`,
        description: `شركة كيان للحول الرقمية`,
        dir: `rtl`,
        ar: `عربي`,
        en: `English`
      },

      input: {
        gender: `اللقب`,
        mr: `السيد`,
        ms: `السيدة`,
        name: `الاسم`,
        mobile: `رقم الجوال`,
        email: `الإيميل`,
        country: `الدولة`,
        city: `المدينة`,
        code: `الكود`,
        desc: `وصف مُختصر`,
        service: `الخدمة المطلوبة`,
        register: `تسجيل`,
        done: 'تم التسجيل، سوف يتواصل معك فريقنا قريبًا.'
      },

      v: {
        notvalid: `غير صحيح.`,
        required: `حقل إلزامي.`,
        email: `الإيميل غير صحيح.`,
        number: `رقم صحيح فقط.`
      },

      nav: {
        home: `الرئيسية`,
      },

      home: {
        title: `التسويق الرقمي وحلول التقنية الذكية`,
        intro_title: 'كيان يناسب العصر'
      }
    })
  })
}
