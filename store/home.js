export const state = () => ({
  loading: false,

  nav: false,

  team: [
    {
      code: `mamdouh-ali`,
      imgSrc: `mamdouh-ali.jpg`,
      name: `ممدوح علي`,
      job: `Business Development Manager`
    },
    {
      code: `omar`,
      imgSrc: `omar.jpg`,
      name: `عمر البلوي`,
      job: `Executive Director`
    },
    {
      code: `osama`,
      imgSrc: `osama.jpeg`,
      name: `أسامة كامل`,
      job: `Chief Technology Officer`
    },
    {
      code: `mahmoud`,
      imgSrc: `mahmoud.jpg`,
      name: `محمود الزهري`,
      job: `Marketing Manager`
    },
    {
      code: `sara`,
      imgSrc: `sara.jpeg`,
      name: `سارة صلاح`,
      job: `Senior Graphic Art Designer`
    },
    {
      code: `mamdouh`,
      imgSrc: `team_5.jpeg`,
      name: `ممدوح`,
      job: `Senior Software Engineer`
    },
    {
      code: `abdallah`,
      imgSrc: `abdo_1.jpeg`,
      name: ` عبد اللاه جاب الله`,
      job: `Software Engineer`
    },
    {
      code: `kafrawy`,
      imgSrc: `team_4.jpeg`,
      name: `محمود الكفراوي`,
      job: `Senior Ui/Ux Designer`
    },
    {
      code: `misara`,
      imgSrc: `team_6.jpeg`,
      name: `ميسرة حامد`,
      job: `Senior Front-End `
    },
    {
      code: `esmail`,
      imgSrc: `team_3.jpeg`,
      name: `اسما عيل نجيب`,
      job: `Graphic Art Directer`
    },
    {
      code: `mostafa`,
      imgSrc: `team_7.jpg`,
      name: `مصطفي فارس`,
      job: `Content Creator`
    },
    {
      code: `nada`,
      imgSrc: `team_8.jpeg`,
      name: `ندى المحتسب`,
      job: `Marketing and SEO`
    },
  ],

  services: [{
    code: `dev`,
    name: `بناء المواقع والتطبيقات`,
    desc: `المواقع والتطبيقات هي أدوات إدارة وإنتاج وتسويق، هنا براعتنا في بنائها بكفاءة وسلاسة تحقق الغاية منها.`,
  }, {
    code: `branding`,
    name: `ابتكار الهوية والتصميم`,
    desc: `الهوية هي الصورة الحيوية لشخصية الشركة الاعتبارية، فالهوية من الأهمية بمكان الكيان، ومن القوة بفصيح البيان.`,
  }, {
    code: `marketing`,
    name: `إدارة التسويق الرقمي`,
    desc: `التأثير في الجماهير رقميًا يعني صياغة كيان رقمي متكامل على كل المنصات، يؤدي دورًا متناغمًا ومظهرًا ملائمًا.`,
  }, {
    code: `ads`,
    name: `تخطيط الإعلانات الرقمية`,
    desc: `كل مورد تملكه الشركة هو إعلان عن حجمها وقدراتها ومفتاح لتحقيق الثقة فيها، لذلك يُكون الكيان الإعلان.`,
  }, {
    code: `content`,
    name: `صياغة وتحرير المحتوى`,
    desc: `المحتوى هو أداة التعبير الأساسية عن الكيان والأهداف والعمليات  والآليات والأرباح، فالكيان بما حوى وإلا هوى.`,
  }, {
    code: `motion`,
    name: `انتاج الموشن جرافيكس`,
    desc: `الرسوم المتحركة المتقنة هي تعبير نابض بالحياة، فالصورة أبلغ من الكلام والحركة هي أثر وتمام الكلام.`,
  }],
  medicals: [
    {
      code: 'client_location',
      name: 'العملاء حولك , ولكن لا تراهم',
      desc: 'النطاق الجغرافي حول المركز الطبي يعيش فيه عدد لا تتوقعه من العملاء، أنت فقط لا تصل إليهم بكفاءة فيما يفعل ذلك منافسين لك، نظام كيان يمكنك من الوصول إلى العملاء حولك الأقرب فالأقرب ويعزز من حضور واستقرار المركز في نطاقه',
    },
    {
      code: 'world_see',
      name: 'هل يراك العملاء كما تريد',
      desc: 'يرى العملاء تفاعل موظفوك معهم، ولا يرون الصورة المشرقة التي تريد أن تبدو عليها منظومة العمل، بالرصد والمتابعة الدائمة سوف تتمكن من رسم الصورة الذهنية التي تنشدها لدى العملاء، نظام يعكس الإحترافيةحترافية ويبذل االهتمام ويرفع األرقام',
    },
    {
      code: 'where_clients',
      name: 'من أين يأتي العملاء ؟',
      desc: 'للعملاء أنماط سلوكية رقمية تمكننا من تصنيفهم وترتيبهم وتحديد مدى استعدادهم للدفع مقابل خدماتنا، هذا النوع من المعرفة بالغ الألهمية لترشيد الإنفاق التسويقي وتوجيه الجهد والإهتمام للقنوات الإعلانية المناسبة      ',
    },
    {
      code: 'more_knowledge',
      name: 'معرفة أكثر بتكلفة أقل',
      desc: 'نظام كيان التسويقي واإلداري يبرع في استثمار التسويق بكفاءة و إدارة جهد العاملين بفاعلية، لتوفير النفقات الإعالنية وإحكام استغالل الفرص البيعية      ',
    },
    {
      code: 'tools',
      name: 'أدوات متابعة فعالة ',
      desc: 'نظام كيان الإدارة العمالء ُيمكن موظفوك من التركيز على عالقة سليمة مع العملاء ويسجل التفاعل معهم ويرتب العملاء بأولوية المتابعة والمراجعة، كما يرصد أسباب الفشل في إدارة واستثمار العالقة مع العميل من أول تفاعل مروًرا بتفاصيل وخطوات المتابعة وحتى قرار العميل بعدم التعامل معنا      ',
    },
    {
      code: 'percent',
      name: 'إدارة العروض والمحتوى',
      desc: 'تحكم في العروض والخصوم والمحتوى المناسبة الأفضل أداء ترويجي باستخدام الموقع، بحيث نجمع بين المزايا التنافسية والوصول الأكبر عدد ممكن من العملاء وذلك بشكل سهل وبسيط من لوحة التحكم      ',
    },
    {
      code: 'lamb',
      name: 'استثمار الأثر الممتد',
      desc: 'من خالل مدونة طبية خاصة لعملائك يتمكن فريق العمل الطبي من نشر محتوى طبي تثقيفي بأسلوب شيق جذاب يساعد على انتشار والظهور بشكل تدريجي طبيعي في كل مكان على الإنترنت',
    },
  ],
  prices: [
    {
      code: '1',
      title: 'موقع الكتروني',
      desc: 'تصميم موقع الكتروني شامل كل شئ بطريقة مثالية وأداء عالي متجاوب مع جميع الأجهزة      ',
      count: '6000 ر.س',
    },
    {
      code: '2',
      title: 'نظام زيادة المبيعات',
      desc: 'امتلك نظامك الشامل الخاص بإدارة المبيعات الموظفين والعملاء',
      count: '12000 ر.س',
    },
    {
      code: '3',
      title: 'إدارة حملة تسويق لمدة شهر',
      desc: 'إدارة حملة تسويقية شاملة كل المحتويات لمدة شهر من تاريخ الاشتراك',
      count: '7000 ر.س',
    },
    {
      code: '4',
      title: 'مدونه خاصة',
      desc: 'مدونه مجانا تساعد على ظهورك على محركات البحث اسرع ',
      count: '1500 ر.س',
    },
  ],
  service: {}
})

export const mutations = {
  loading: (state, loading) => { state.loading = loading },

  nav: (state, bool) => { state.nav = bool },

  services: (state, services) => { state.services = services },

  service: (state, service) => { state.service = service }
}

export const actions = {
  services({ commit }, payload) {
    return this.$axios.$get('lead/publicServices', payload).then((ok) => {
      commit('services', ok.data.services)
    }).catch(() => { return false })
  },

  register({ commit }, payload) {
    return this.$axios.$post('lead/register', payload).then((ok) => {
      return ok
    }).catch(() => false)
  }
}
