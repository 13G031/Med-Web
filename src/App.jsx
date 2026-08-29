import React, { useEffect, useRef, useState } from 'react'
import './code-groups.css'
import {
  ArrowRight,
  Buildings,
  CaretDown,
  Certificate,
  CheckCircle,
  Clock,
  EnvelopeSimple,
  Flask,
  List,
  MapPin,
  Phone,
  ShieldCheck,
  X,
} from '@phosphor-icons/react'

const navItems = [
  ['关于我们', '#about'],
  ['产品中心', '#products'],
  ['临床与证据', '#evidence'],
  ['问题与解答', '#support'],
]

const proofItems = [
  {
    icon: ShieldCheck,
    title: 'Ⅲ类医疗器械',
    detail: '止血敷片（国械注准20153140973）',
  },
  {
    icon: Certificate,
    title: 'Ⅱ类医疗器械',
    detail: 'PVF医用海绵（陕械注准20172140019）',
  },
  {
    icon: Flask,
    title: '两项核心发明专利',
    detail: '急救止血敷片与PVF医用海绵',
  },
  {
    icon: Buildings,
    title: '全国医疗采购挂网，医保集采，招标配备',
    detail: '京进冀止血资料集中带量采购（全国执行）',
  },
]

const companyHonors = [
  '陕西省科技创新重大项目',
  '陕西省“13115”重大科技项目',
  '国家发改委高技术产业化项目',
  'NMPA 的 CA 认证',
  '国家医保医用耗材分类代码',
]

const institutionalDeployments = [
  '通过国家公安部警务列配评审及配备',
  '通过国家应急部评审及陕西消防局配备',
  '通过陕西省公安警务列配目录并配备',
  '入选陕西省应急配备目录并储备',
   '陕西省教育厅针对陕西省各学校的安全问题发文推荐',
  '黑龙江省100个旅游景点应急站配备',
  '......及其他特殊配备、储备',
]

const reliefSupport = [
  '玉树地震救援捐赠及使用',
  '雅安地震救援捐赠及使用',
  '四川甘孜州地震救援捐赠及使用',
  '河南特大水灾受灾及遇险人员防护捐赠及使用',
  '新疆武警防护捐赠及使用',
  '云南、西藏及新疆边防战士防护配备',
  '云南疫情工作人员防护配备',
  '陕西曙光救援队太白山远山活动捐赠配备',
]

const mechanism = [
  {
    title: '物理吸附作用',
    text: '医用海绵吸收血液中的水分，为血小板聚集提供附着基质，并覆盖保护创面。',
  },
  {
    title: '压迫止血作用',
    text: '按压在创面处，覆盖创面与空气隔离，并通过物理压迫使血液快速凝结，让药物组方与创面紧贴发挥作用。',
  },
  {
    title: '生物活性药物作用',
    text: '调动人自身凝血因子，促进纤维蛋白原转化为纤维蛋白，加快血液凝固。并抑制纤溶发生，帮助防止凝血块溶解，形成完整的三重止血机理，调动凝血因子，促进纤维蛋白原转化为纤维蛋白，加快血液凝固。',
  },
]

const hemostasisSizes = ['9.5×8.0cm', '5.0×4.0cm', '8.0×3.0cm', '10.0×1.5cm', '3.0×1.5cm']

const hemostasisDetails = [
  {
    heading: '注册与许可（NMPA）',
    facts: [
      ['管理类别', 'Ⅲ类医疗器械'],
      ['注册号', '国械注准20153140973'],
    ],
  },
  {
    heading: '型号规格',
    wide: true,
    groups: [
      { title: 'Ⅰ型（含透气胶层）', meta: '红白色图文包装，OTC产品（院外急救和急救门诊使用）', items: hemostasisSizes },
      { title: 'Ⅱ型（无胶层）', meta: '浅蓝白色图文色包装，临床用产品（医院内手术使用）', items: hemostasisSizes },
    ],
  },
  {
    heading: '适用范围',
    wide: true,
    groups: [
      {
        title: 'Ⅰ型（院前急救与伤口护理）',
        items: [
          '1. 地震、抗洪、救灾等不可抗力的自然灾害发生及没有医疗条件下的野外外伤紧急止血的急救储备配备；',
          '2. 国家应急储备及全国各省、市、区、县、乡级的应急储备及配备；',
          '3. 120、999院前急救及红十字会等国际灾难救援储备及配备；',
          '4. 军事、警力、消防储备及配备；',
          '5. 户外运动、户外救援队自救与救援储备及配备；',
          '6. 幼稚园、大、中、小学校（师生）及校车安全应急救援配备',
          '7. 野外高空作业、大型矿山、油田、钻探、勘探、各类建筑、建设工程现场等领域作业的应急急救的安全配备；',
          '8. 公共交通站（公交车）、高铁站（高铁）、码头（轮船）、机场（飞机）及旅行中突发性外伤应急急救配备；',
          '9. 各种车辆应急急救安全配备；',
          '10.差旅者随身（包）应急急救携带配备；',
          '11. 旅游景点应急站、旅游车、自驾游车辆、导游及旅客随身随车应急配备；',
          '12. 家庭突发性外伤止血急救和自救的应急配备；',
          '13. 体育竞技的安全配备；',
          '14. 意外外伤伤口的紧急止血和包扎；',
          '15. 携带宠物突发外伤的应急急救配备；',
        ],
      },
      {
        title: 'Ⅱ型（院内临床与手术使用）',
        items: [
          '1. 门诊急救止血；',
          '2. 手术中快速止血；',
          '3. 手术缝合后体表渗血的出血的止血防粘连及包扎使用；'

        ],
      },
    ],
  },
  {
    heading: '产品特点与优势',
    wide: true,
    ordered: true,
    groups: [
      {
        title: 'Ⅰ型（院前急救与伤口护理）',
        items: [
          '有效控制大出血：3-5分钟有效控制大出血。',
          '敷片具有良好的柔韧性与伤口的顺应性贴合促使活性药物可以与伤口紧密结合快速止血。',
          '良好的安全性：所有敷片的组成成分均为中国、美国、欧洲药典载录产品，急救止血敷片没有采用任何外源性的人体蛋白如纤维蛋白原，从根本上杜绝了血源性病毒污染的危险性，所以具有良好的安全性。',
          '操作使用携带保存方便：外伤出血非常迅速只需直接把急救止血敷片按压在伤口3-5分钟即可。使用人员无须经过专业技术培训，均可完成自救和急救，大大节省了抢救时间，提高了抢救成功率。因工艺特殊敷片可以在常温下保存方便储存和携带，适用于野外复杂的气候条件扩大了其使用范围。',
          '减少资源使用：迅速止血除了可挽救生命，也可降低、节约对输血用血源的再使用，减少血源性疾病的再感染。',
          '规格多样化，适合不同创伤（口）出血的止血。',
        ],
      },
      {
        title: 'Ⅱ型（院内临床与手术使用）',
        items: [
          '医保集采三类可用于门诊紧急急救和手术中快速止血的不可吸收安全止血产品。',
          '止血快速、吸附性强，使创面干净、视野清晰，提高手术质量，节约手术时间。',
          '医用海绵遇血后不会成为胶状物，不粘连手术器械，可移动放置，操作简单方便，不影响创面辨识度。',
          '快速止血有助于减少失血，并降低输血及其他止血耗材的使用成本。',
          '非吸收材质止血后移除体外，安全无残留，无炎性反应、无伪影、无栓塞。',
          '止血后无须留置体内，无任何残留物，不会造成继发性风险。',
        ],
      },
    ],
    procedures: [
      {
        title: 'Ⅰ型操作步骤',
        image: '/images/hemostasis-use-procedure.png',
        width: 1981,
        height: 793,
        alt: '急救止血敷片Ⅰ型三步操作示意：拆包取片、揭膜按压和送医后清创去除',
        steps: [
          '撕开铝塑包装，取出敷片。',
          '揭开敷片保护膜，将敷片按压在伤口表面直至出血停止。',
          '止血后敷片应保留其在创面至送达医院做清创处理时去除。',
        ],
      },
      {
        title: 'Ⅱ型操作步骤',
        images: [
          {
            src: '/images/pvf-use-step-1.png',
            alt: '急救止血敷片Ⅱ型：撕开包装并取出敷片',
            width: 457,
            height: 472,
          },
          {
            src: '/images/hemostasis-type-ii-step-2.png',
            alt: '急救止血敷片Ⅱ型：将敷片按压在伤口表面',
            width: 1254,
            height: 1254,
          },
        ],
        steps: [
          '撕开铝塑包装，取出敷片。',
          '揭开敷片保护膜，将敷片按压在伤口表面直至出血停止。',
          '止血后敷片应保留其在创面至送达医院做清创处理时去除。',
        ],
      },
    ],
  },
  {
    heading: '医保耗材编码',
    wide: true,
    codeRows: [
      {
        label: 'Ⅰ型',
        items: [
          { size: '9.5×8cm', code: 'C15011121200000107660000016' },
          { size: '8×3cm', code: 'C15011121200000107660000014' },
          { size: '5×4cm', code: 'C15011121200000107660000018' },
          { size: '10×1.5cm', code: 'C15011121200000107660000015' },
          { size: '3×1.5cm', code: 'C15011121200000107660000013' },
        ],
      },
      {
        label: 'Ⅱ型',
        items: [
          { size: '9.5×8cm', code: 'C15011121200000107660000020' },
          { size: '8×3cm', code: 'C15011121200000107660000012' },
          { size: '5×4cm', code: 'C15011121200000107660000019' },
          { size: '10×1.5cm', code: 'C15011121200000107660000002' },
          { size: '3×1.5cm', code: 'C15011121200000107660000017' },
        ],
      },
    ],
  },
  {
    heading: '国家医保医疗采购挂网与集采',
    timeline: [
      ['2020年', '取得国家医保医用耗材分类代码，被陕西省医保局纳入医保'],
      ['2021年', '中标陕西省耗材医保集中带量采购项目'],
      ['2023年', '中标内蒙古牵头14省联盟止血耗材集中带量采购项目'],
      ['2026年', '中标京津冀止血耗材集中带量采购项目（独立分组，活性止血海绵）全国参与执行'],
    ],
  },
]

const pvfDetails = [
  {
    heading: '注册与许可',
    wide: true,
    facts: [
      ['管理类别', 'Ⅱ类医疗器械（分类编码14-09-03 外科海绵敷料）'],
      ['产品注册证号', '陕械注准20172140019'],
      ['发明专利', 'ZL 2009 1 0021479.6（医用止血海绵及其制备方法）'],
      ['生产许可记录', '陕食药监械生产许20160021号'],
    ],
  },
  {
    heading: '产品简介',
    wide: true,
    intro: '聚乙烯醇缩甲醛（PVF）医用海绵是安帝源生物科技团队原创的生物新材料，用于各种创伤出血（液）的吸附、伤口的包扎和致伤缺损的填充，也是负压封闭引流手术中应用的主体材料。该产品技术先进，可用于医疗、电子、生活等多个领域。',
  },
  {
    heading: '完整规格型号',
    wide: true,
    groups: [
      {
        title: 'PVF-I 矩形（长×宽×高）',
        meta: '浅绿白图文包装',
        items: [
          'PVF-I-1：30.0×24.0×1.0cm',
          'PVF-I-2：20.0×16.0×1.0cm',
          'PVF-I-3：9.5×8.0×0.6cm',
          'PVF-I-4：5.0×4.0×0.2cm',
          'PVF-I-5：10.0×1.5×0.2cm',
          'PVF-I-6：3.0×1.5×0.2cm',
          'PVF-I-7：8.0×3.0×0.6cm',
        ],
      },
      {
        title: 'PVF-II 圆柱形（直径×高）',
        items: ['PVF-II-1：1.0×0.8cm', 'PVF-II-2：1.0×0.2cm', 'PVF-II-3：2.0×3.0cm'],
      },
      {
        title: 'PVF-III 圆管形（外径×内径×高）',
        items: ['PVF-III：1.0×0.45×0.8cm'],
      },
      {
        title: 'PVF-IV 特殊形状',
        items: ['可按临床需求定制'],
      },
    ],
  },
  {
    heading: '科技与优势',
    wide: true,
    items: [
      '吸水后抗撕裂性能强，拉伸强度大，弹性优',
      '耐低温，有隔热保温功能',
      '化学稳定性好、耐环境老化性和耐候性强',
      '吸水率高、保水性能强，吸水速率快',
      '吸水后柔软细腻，皮肤贴附性好',
      '无纤维脱落，不会引发再感染',
      '生物相容性好，不会产生排异反应',
    ],
  },
  {
    heading: '应用范围',
    wide: true,
    items: [
      '外科手术中吸擦血液和液体',
      '烫伤、化脓伤口的液体擦拭和吸附',
      '应用于开颅手术和心脏手术中，不会因纤维脱落而影响伤口愈合',
      '弹性极高的海绵体，可对手术中需填充部分提供均匀的支撑和压迫。用于整形外科因伤病所致的缺损致伤填充，如鼻腔、鼻成型、鼻窦炎、鼻息肉、中鼻道等手术后出血的填塞及鼻出血急诊的填塞等',
      '手术缝合后的防渗血防粘连包扎与伤口护理',
      '可作为临床长时间、均匀用药的缓释载体',
      '可加工成不同形状及规格的产品，以满足不同手术及临床需要。显微外科可使用梭形吸血海绵吸净细小部位的出血',
      '可按临床与使用需求加工成各种型号规格',
    ],
  },
  {
    heading: '禁忌症',
    wide: true,
    note: '对该产品过敏者禁用。',
  },
  {
    heading: '医保耗材编码',
    wide: true,
    codeGroups: [
      { label: 'PVF-I-1', size: '30×24×1.0cm', code: 'C15010521204021107660000001' },
      { label: 'PVF-I-2', size: '20×16×1.0cm', code: 'C15010521204021107660000003' },
      { label: 'PVF-I-3', size: '9.5×8×0.6cm', code: 'C15010521204021107660000002' },
      { label: 'PVF-I-4', size: '5×4×0.2cm', code: 'C15010521204021107660000004' },
      { label: 'PVF-I-5', size: '10×1.5×0.2cm', code: 'C15010521204021107660000005' },
      { label: 'PVF-I-6', size: '3×1.5×0.2cm', code: 'C15010521204021107660000006' },
      { label: 'PVF-I-7', size: '8×3×0.6cm', code: 'C15010521204021107660000007' },
    ],
  },
]

const animalEvidence = [
  {
    institution: '西安交通大学医学院药理研究室',
    result: '股动脉出血，3-5分钟控制出血，8-10分钟完全止血（不渗血）',
    details: [
      ['实验对象', '成猪（45kg）股动脉出血止血实验（国际标准动物模型）'],
      ['实验结果', '3-5分钟控制出血，8-10分钟完全止血（不渗血）。对动静脉以及弥散性出血、深层开放性出血具有良好的止血功效。'],
      ['实验背景', '动脉因人类伦理学要求，不允许用人做动脉试验。猪与人的凝血同缘性达87%以上，为凝血（止血）的国际标准动物。很多止血产品用的是鼠和兔子（易止血），用成猪（和人匹重）的很少，本实验数据具有极高的临床参考价值。'],
    ],
  },
]

const humanClinicalEvidence = [
  {
    institution: '北京大学人民医院 / 首都医科大学宣武医院',
    result: '开放性深层组织活动性出血止血验证',
    details: [
      ['临床对象', '选取接受中等程度以上手术的多例患者。'],
      ['验证内容', '针对开放性的深层组织活动性出血进行止血验证。'],
      ['实验结果', '急救止血敷片在临床应用中，对手术缺口的出血止血效果安全有效，能有效控制各种出血模型，无任何毒性和明显的副作用。'],
    ],
  },
]

// 产品上市后在临床中使用的再验征
/*const postMarketEvidence = [
  {
    institution: '第四军医大学西京医院 · 骨科 · 切皮压迫皮缘性手术出血的止血',
    result: '3分钟快速止血',
    details: [
      ['试用结果', '手术创面3分钟快速止血，减少患者出血量，保障手术中全程创面清晰，节约手术时间。'],
    ],
  },
  {
    institution: '脊柱外科 · 大椎管手术出血的止',
    result: '1分钟快速止血',
    details: [
      ['试用结果', '椎管止血难度大，使用急救止血敷片1分钟快速止血，出血量非常少，节约手术时间，降低手术风险。'],
    ],
  },
  {
    institution: '心血管介入科 · 桡动脉穿刺手术后血管深层出血的止血',
    result: '3-5分钟控制，8-10分钟稳定',
    details: [
      ['试用结果', '桡动脉穿刺术后深层止血，一般需按压20分钟甚至十几小时，使用急救止血敷片3-5分钟控制出血，8-10分钟稳定止血，减轻传统长期压迫止血引起的诸多副作用。'],
    ],
  },
  {
    institution: '四川华美口腔医院 · 口腔外科 · 拔牙(下颚磨牙）手术中出血的止血',
    result: '1分钟止血',
    details: [
      ['试用结果', '止血时间1分钟，减少患者出血量，缩短出血时间，减轻常规止血时间长引起的患者紧张压力和吐污不止不停漱口的不便。'],
    ],
  },
]*/

const evidenceGroupDividerStyle = {
  marginTop: '36px',
  paddingTop: '36px',
  borderTop: '1px solid var(--line)',
}

const procurement = [
  {
    year: '2020',
    title: '医保分类代码与省级准入',
    detail: '取得国家医保医用耗材分类代码，并被陕西省医保局纳入医保。',
    scope: '急救止血敷片 · PVF医用海绵',
  },
  {
    year: '2021',
    title: '陕西省集中带量采购中标',
    detail: '中标陕西省耗材医保集中带量采购项目，形成省级采购准入节点。',
    scope: '急救止血敷片 · PVF医用海绵',
  },
  {
    year: '2023',
    title: '14省联盟集采中标',
    detail: '中标内蒙古牵头14省联盟止血耗材集中带量采购项目。',
    scope: '急救止血敷片 · PVF医用海绵',
  },
  {
    year: '2024',
    title: '京津冀“3+N”项目中标',
    detail: '中标京津冀“3+N”耗材集中带量采购项目。',
    scope: 'PVF医用海绵',
  },
  {
    year: '2026',
    title: '京津冀止血耗材项目中标全国参与执行',
    detail: '急救止血敷片以活性止血海绵独立分组进入京津冀止血耗材集中带量采购项目。',
    scope: [
      '急救止血敷片 · PVF医用海绵',
      '均已完成在国家医保公共服务平台全国医疗采购挂网',
    ],
  },
]

function Header() {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        window.requestAnimationFrame(() => menuButtonRef.current?.focus())
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label="安帝源生物科技首页">
          <span>
            <strong>安帝源生物科技</strong>
            <small>EMPO BIOTECH</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="主要导航">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <a className="button button-small desktop-contact" href="#contact">
          联系我们
        </a>

        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? '关闭导航' : '打开导航'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${open ? 'is-open' : ''}`}
        aria-label="移动端导航"
        hidden={!open}
      >
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>联系我们</a>
      </nav>
    </header>
  )
}

function ProofLedger() {
  return (
    <div className="proof-ledger" aria-label="核心资质与成果">
      {proofItems.map(({ icon: Icon, title, detail }) => (
        <div className="proof-item" key={title}>
          <Icon size={26} weight="regular" aria-hidden="true" />
          <span>
            <strong>{title}</strong>
            <small>{detail}</small>
          </span>
        </div>
      ))}
    </div>
  )
}

function ProductArticle({ type, title, registration, image, imageWebp, imageAlt, imageWidth = 1448, imageHeight = 1086, imageFit, children, facts, details, reverse }) {
  return (
    <article className={`product-article ${reverse ? 'product-article-reverse' : ''}`} data-reveal>
      <figure className={`product-visual ${imageFit === 'contain' ? 'product-visual-contained' : ''}`}>
        <picture>
          {imageWebp && <source srcSet={imageWebp} type="image/webp" />}
          <img
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </figure>
      <div className="product-copy">
        <div className="product-type">{type}</div>
        <h3>{title}</h3>
        <p>{children}</p>
        <dl className="product-facts">
          <div>
            <dt>注册证号</dt>
            <dd>{registration}</dd>
          </div>
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <a className="text-link" href="#contact">
          获取产品资料 <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
      <details className="product-details">
        <summary>查看完整产品信息 <CaretDown size={18} aria-hidden="true" /></summary>
        <div className="product-detail-grid">
          {details.map(({ heading, intro, facts: detailFacts, codeGroups, codeRows, groups, procedures, items, ordered, timeline, note, wide }) => (
            <section className={`product-detail-section ${wide ? 'product-detail-section-wide' : ''}`} key={heading}>
              <h4>{heading}</h4>
              {intro && <p>{intro}</p>}
              {detailFacts && (
                <dl className="product-detail-facts">
                  {detailFacts.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {codeGroups && (
                <div className="product-code-groups">
                  {codeGroups.map(({ label, size, code }) => (
                    <div className="product-code-group" key={`${label}-${size}-${code}`}>
                      <h5>{label}</h5>
                      <p><span>规格：</span>{size}</p>
                      <p className="product-code-value"><span>编码：</span><strong>{code}</strong></p>
                    </div>
                  ))}
                </div>
              )}
              {codeRows && (
                <div className="product-code-rows">
                  {codeRows.map(({ label, items: rowItems }) => (
                    <div className="product-code-row" key={label}>
                      <h5>{label}</h5>
                      <div className="product-code-row-items">
                        {rowItems.map(({ size, code }) => (
                          <div className="product-code-group" key={`${label}-${size}-${code}`}>
                            <p><span>规格：</span>{size}</p>
                            <p className="product-code-value"><span>编码：</span><strong>{code}</strong></p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {groups && (
                <div className="product-detail-groups">
                  {groups.map((group) => (
                    <div key={group.title}>
                      <h5>{group.title}</h5>
                      {group.meta && <p>{group.meta}</p>}
                      {ordered ? (
                        <ol>
                          {group.items.map((item) => <li key={item}>{item}</li>)}
                        </ol>
                      ) : (
                        <ul>
                          {group.items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {procedures?.map((procedure) => (
                <figure className={`product-procedure ${procedure.images ? 'product-procedure-two-step' : ''}`} key={procedure.title}>
                  <h5>{procedure.title}</h5>
                  {procedure.images ? (
                    <div className="product-procedure-images">
                      {procedure.images.map((image) => (
                        <img
                          key={image.src}
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={procedure.image}
                      alt={procedure.alt}
                      width={procedure.width}
                      height={procedure.height}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <figcaption>
                    <ol>
                      {procedure.steps.map((step, index) => (
                        <li key={step}>
                          <span>{String(index + 1).padStart(2, '0')}</span>
                          <p>{step}</p>
                        </li>
                      ))}
                    </ol>
                  </figcaption>
                </figure>
              ))}
              {items && (ordered ? (
                <ol className="product-detail-list">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ol>
              ) : (
                <ul className="product-detail-list">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ))}
              {timeline && (
                <ol className="product-detail-timeline">
                  {timeline.map(([year, text]) => (
                    <li key={year}>
                      <time>{year}</time>
                      <span>{text}</span>
                    </li>
                  ))}
                </ol>
              )}
              {note && <p className="product-detail-note">{note}</p>}
            </section>
          ))}
        </div>
      </details>
    </article>
  )
}

function ContactForm() {
  const [status, setStatus] = useState('idle')

  const submit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !phone) {
      setStatus('error-fields')
      form.elements[name ? 'phone' : 'name'].focus()
      return
    }

    if (message.length < 10) {
      setStatus('error-message')
      form.elements.message.focus()
      return
    }

    setStatus('loading')
    window.setTimeout(() => {
      setStatus('success')
      form.reset()
    }, 650)
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          姓名
          <input
            name="name"
            autoComplete="name"
            required
            placeholder="请输入姓名"
            aria-invalid={status === 'error-fields'}
            aria-describedby={status === 'error-fields' ? 'contact-fields-error' : undefined}
          />
        </label>
        <label>
          联系电话
          <input
            name="phone"
            autoComplete="tel"
            required
            placeholder="请输入联系电话"
            aria-invalid={status === 'error-fields'}
            aria-describedby={status === 'error-fields' ? 'contact-fields-error' : undefined}
          />
        </label>
      </div>
      <label>
        留言内容
        <textarea
          name="message"
          rows="5"
          required
          minLength="10"
          placeholder="请说明所需产品、资料或合作事项"
          aria-invalid={status === 'error-message'}
          aria-describedby={status === 'error-message' ? 'message-help contact-message-error' : 'message-help'}
        />
      </label>
      <p id="message-help" className="form-help">留言至少需要 10 个字。</p>
      {status === 'error-fields' && (
        <p id="contact-fields-error" className="form-status form-error" role="alert">
          请填写姓名与联系电话。
        </p>
      )}
      {status === 'error-message' && (
        <p id="contact-message-error" className="form-status form-error" role="alert">
          留言内容过短，请补充具体需求后重试。
        </p>
      )}
      {status === 'success' && (
        <p className="form-status form-success" role="status">
          演示提交成功。接入正式后端后，留言才能发送给公司。
        </p>
      )}
      <button className="button" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? '正在提交' : '提交留言'}
        {status !== 'loading' && <ArrowRight size={18} aria-hidden="true" />}
      </button>
    </form>
  )
}

function QuestionForm() {
  const [status, setStatus] = useState('idle')

  const submit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const email = String(data.get('email') || '').trim()
    const question = String(data.get('question') || '').trim()
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!validEmail) {
      setStatus('error-email')
      form.elements.email.focus()
      return
    }

    if (question.length < 10) {
      setStatus('error-question')
      form.elements.question.focus()
      return
    }

    setStatus('loading')
    window.setTimeout(() => {
      setStatus('success')
      form.reset()
    }, 650)
  }

  return (
    <form className="contact-form question-form" onSubmit={submit} noValidate>
      <label>
        电子邮箱
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="请输入您的电子邮箱"
          aria-invalid={status === 'error-email'}
          aria-describedby={status === 'error-email' ? 'question-email-error' : undefined}
        />
      </label>
      <label>
        您的问题
        <textarea
          name="question"
          rows="6"
          required
          minLength="10"
          placeholder="请输入您希望咨询的问题"
          aria-invalid={status === 'error-question'}
          aria-describedby={status === 'error-question' ? 'question-help question-content-error' : 'question-help'}
        />
      </label>
      <p id="question-help" className="form-help">问题内容至少需要 10 个字。</p>
      {status === 'error-email' && (
        <p id="question-email-error" className="form-status form-error" role="alert">
          请输入有效的电子邮箱地址。
        </p>
      )}
      {status === 'error-question' && (
        <p id="question-content-error" className="form-status form-error" role="alert">
          问题内容过短，请补充具体问题后重试。
        </p>
      )}
      {status === 'success' && (
        <p className="form-status form-success" role="status">
          问题已记录。接入正式后端后，我们将通过电子邮箱回复您。
        </p>
      )}
      <button className="button" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? '正在提交' : '提交问题'}
        {status !== 'loading' && <ArrowRight size={18} aria-hidden="true" />}
      </button>
    </form>
  )
}

function EvidenceEntry({ item }) {
  return (
    <article>
      <div>
        <Buildings size={22} aria-hidden="true" />
        <strong>{item.institution}</strong>
      </div>
      <h4>{item.result}</h4>
      <dl className="clinical-detail">
        {item.details.map(([label, text]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}

function EvidenceGroup({ title, items, separated = false }) {
  return (
    <section className="clinical-group" style={separated ? evidenceGroupDividerStyle : undefined}>
      <h3>{title}</h3>
      {items.map((item) => <EvidenceEntry key={`${item.institution}-${item.result}`} item={item} />)}
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section id="top" className="hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>快速止血的核心科技<br />及应用展示</h1>
              <p className="hero-summary">覆盖急救、手术与创面护理的双产品解决方案。</p>
              <div className="hero-actions">
                <a className="button" href="#products">
                  查看产品 <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="button button-secondary" href="#evidence">应用及展示</a>
              </div>
            </div>
            <figure className="hero-visual">
              <picture>
                <source srcSet="/images/emergency-hemostasis-patch-final.png" type="image/png" />
                <img
                  src="/images/emergency-hemostasis-patch-final.png"
                  alt="急救止血敷片、银色无菌内袋与白色外包装的产品视觉"
                  width="1254"
                  height="1254"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </figure>
          </div>
          <ProofLedger />
        </section>

        <section id="about" className="section about-section">
          <div className="about-intro" data-reveal>
            <div className="about-copy">
              <div className="section-heading">
                <h2>公司简介</h2>
              </div>
              <div className="about-copy-body">
                <p>
                  杨凌安帝源生物科技有限公司成立于2009年,位于陕西省杨凌示范区邰城南路10号。是一家集三类医疗器械研发、生产、销售为一体的综合性现代化高科技生物产业公司。
                </p>
                <p>
                  公司拥有多项原创知识产权和生物科技独家技术，如：“急救止血敷片”、“复方止血敷片”、“超薄生物止血膜”、“聚乙烯醇缩甲醛（PVF）医用海绵”、“HCV病毒复制” 等系列核心技术及产品。公司生物科技药械组合的“急救止血敷片”产品在院外紧急止血和院内急诊及手术中快速止血急救生命方面发挥重要作用。
                </p>
                <p>
                  多年来公司一直坚持以100%的原创技术为经营发展方向，拥有多条国家级GMP认证的生产线和一支高质量生产及推广团队，核心原创技术产品均进入国家医保集采目录，在生物技术用于生命应急急救止血和急诊、手术中的快速止血领域具有一定的影响力。
                </p>
              </div>
            </div>

            <figure className="about-campus">
              <img
                src="/images/company-campus-real-v1.jpg"
                alt="安帝源生物科技园区建筑鸟瞰图"
                width="1498"
                height="1050"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>

          <div className="about-purpose" data-reveal>
            <strong>企业使命</strong>
            <p>
              公司立足于生命急救产品的开发，用科技提升保护人类生命健康，提倡人们“关爱生命，珍惜生命。”用科技赋能打造高端医疗器械、智能数字化医疗器械、应急急救平台建设等，服务提升院前急救及急诊，手术临床水平，为“急救生命，呵护生命、健延生命”而奉献。
            </p>
          </div>

          <div className="about-rd" data-reveal>
            <div className="about-rd-lead">
              <div className="about-subheading">
                <h3>核心科技/研发</h3>
                <p>围绕急救止血敷片与聚乙烯醇甲醛PVF医用海绵形成原创知识产权、核心科技及应用场景。</p>
              </div>
              <figure className="about-rd-visual">
                <img
                  src="/images/cleanroom-production-v1.jpg"
                  alt="工作人员在洁净生产车间整理产品包装"
                  width="1517"
                  height="1037"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>洁净生产车间</figcaption>
              </figure>
            </div>
            <div className="about-rd-list">
              <article>
                <h4>急救止血敷片</h4>
                <p>
                  拥有原创知识产权和核心技术，创造性地将吸水海绵和多种生物活性药物组分相结合，采用独特的生产工艺使活性药物在常温下不失活性，通过调动人自身凝血因子快速止血，展示生物科技的魅力。
                </p>
              </article>
              <article>
                <h4>独家地位</h4>
                <p>
                  拥有核心科技，原创知识产权（发明专利号：ZL2005 10096239.4）全球唯一冠名为“急救止血敷片”的产品；国家医保集采（京津冀）招标以活性药物海绵独立分组（无同类同理医疗器械类同类比对产品）；也是我国唯一经过药、械联审的三类止血产品。
                </p>
              </article>
              <article>
                <h4>聚乙烯醇缩甲醛（PVF）医用海绵</h4>
                <p>
                  聚乙烯醇缩甲醛（PVF）医用海绵（ZL 2009 1 0021479.6）二类医疗器械（陕械注准20172140019）是拥有特殊技术的医疗新材料。
                </p>
              </article>
            </div>
          </div>

          <div className="about-records" data-reveal>
            <div className="about-subheading">
              <span className="product-type about-record-product-label">急救止血敷片</span>
              <h3>荣誉与公共服务</h3>
              <p>按重大科技项目、国家部门及省级中标列配、灾害救援捐赠三个类别集中呈现。</p>
            </div>
            <div className="about-record-list">
              <details open>
                <summary>
                  <span>重大科技项目荣誉</span>
                  <CaretDown size={20} aria-hidden="true" />
                </summary>
                <ul className="record-list">
                  {companyHonors.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </details>
              <details>
                <summary>
                  <span>国家部门及省级中标列配</span>
                  <CaretDown size={20} aria-hidden="true" />
                </summary>
                <ol className="record-list">
                  {institutionalDeployments.map((item) => <li key={item}>{item}</li>)}
                </ol>
              </details>
              <details>
                <summary>
                  <span>灾害救援捐赠</span>
                  <CaretDown size={20} aria-hidden="true" />
                </summary>
                <ul className="record-list">
                  {reliefSupport.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </details>
            </div>
          </div>
        </section>

        <section id="products" className="mechanism-section" aria-labelledby="mechanism-title">
          <div className="section mechanism-inner" data-reveal>
            <div className="section-heading section-heading-light">
              <h2 id="mechanism-title">三重止血功能，叠加互促，共同打开快速止血的凝血键</h2>
              <p>从调动凝血因子主动快速止血到吸液支撑，产品信息按临床用途和注册类别清晰分列。</p>
            </div>
            <ol className="mechanism-flow">
              {mechanism.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section products-section">

          <ProductArticle
            type="Ⅲ类医疗器械"
            title="急救止血敷片"
            registration="国械注准20153140973"
            image="/images/hemostasis-packages-bilingual.png"
            imageFit="contain"
            imageAlt="急救止血敷片包装盒、无菌内袋与止血敷片产品展示"
            imageWidth={1536}
            imageHeight={1024}
            facts={[
              ['发明专利', 'ZL 2005 1 0096239.4'],
              ['适用方向', '院前急救、急诊、手术创面及穿刺止血'],
            ]}
            details={hemostasisDetails}
          >
            由吸水海绵与生物活性药物组分构成，通过物理吸附、物理压迫及生物活性药物，调动人体自身凝血因子，迅速止血，止血后移除体外（使用安全可靠，无滞留体内继发风险。
          </ProductArticle>

        </section>

        <section id="evidence" className="section evidence-section">
          <div className="section-heading" data-reveal>
            <span className="product-type">急救止血敷片</span>
            <h2>动物实验  -  临床验证  -  产品上市后在临床中使用的再验征</h2>
          </div>

          <div className="evidence-layout">
            <div className="clinical-list" data-reveal>
              <EvidenceGroup title="动物实验" items={animalEvidence} />
              <EvidenceGroup title="人体 / 临床实验" items={humanClinicalEvidence} separated />
              <aside className="clinical-summary" aria-labelledby="post-market-summary-title">
                <h2 id="post-market-summary-title">产品上市后在临床中使用的再验征</h2>
                <dl>
                  <div>
                    <dt>延续注册</dt>
                    <dd>三类延续注册，已向NMPA提供上市后31家医院临床使用共232例不同创面的出血的止血样列（再次换证无需再提供临床反馈）。</dd>
                  </div>
                  <div>
                    <dt>观察结果</dt>
                    <dd>临床使用观察的效果得出：急救止血敷片232例观察中止血效果优及良好，无一例无效止血和不良反应。</dd>
                  </div>
                </dl>
              </aside>
              <a className="text-link" href="#contact">
                咨询台（联系我们） <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="procurement-panel" data-reveal>
              <div className="procurement-heading">
                <h3>国家医保医疗采购挂网与集采</h3>

              </div>
              <ol>
                {procurement.map(({ year, title, detail, scope, note }) => (
                  <li key={`${year}-${title}`}>
                    <time dateTime={year}>{year}</time>
                    <div>
                      <strong>{title}</strong>
                      <p>{detail}</p>
                      {note && <p className="procurement-entry-note">{note}</p>}
                      <small className={Array.isArray(scope) ? 'procurement-scope-lines' : undefined}>
                        {Array.isArray(scope)
                          ? scope.map((line) => <span key={line}>{line}</span>)
                          : scope}
                      </small>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section products-section">
          <ProductArticle
            type="Ⅱ类医疗器械"
            title="聚乙烯醇缩甲醛（PVF）医用海绵"
            registration="陕械注准20172140019"
            image="/images/pvf-product-display-v2.jpg"
            imageAlt="安帝源聚乙烯醇缩甲醛 PVF 医用海绵、包装盒与密封袋产品展示"
            imageWidth={1536}
            imageHeight={1024}
            imageFit="contain"
            reverse
            facts={[
              ['发明专利', 'ZL 2009 1 0021479.6'],
              ['适用方向', '吸血吸液、创面护理、腔道填塞及物理支撑'],
            ]}
            details={pvfDetails}
          >
            聚乙烯醇缩甲醛医用海绵具备高吸液、柔软高弹、无纤维脱落等特点，可制成矩形、圆柱、圆管及定制形状。
          </ProductArticle>
        </section>

        <section id="support" className="section question-section">
          <div className="question-intro" data-reveal>
            <span className="product-type">在线咨询</span>
            <h2>问题与解答</h2>
            <p>请留下您的电子邮箱和具体问题，我们将根据咨询内容准备回复。</p>
          </div>
          <div data-reveal>
            <QuestionForm />
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section contact-layout contact-layout-centered" data-reveal>
            <div className="contact-copy">
              <h2>需要产品资料或合作洽谈？</h2>
              <p>请说明产品、临床科室或采购项目，我们将按您的需求准备资料。</p>
              <address>
                <a href="tel:02987071861"><Phone size={20} aria-hidden="true" />029-87071861 / 186-2933-7891（中国） / 155-9618-5069 （国际）/</a>
                <a href="mailto:wilsion_yang@163.com"><EnvelopeSimple size={20} aria-hidden="true" />wilsion_yang@163.com</a>
                <span><MapPin size={20} aria-hidden="true" />陕西省杨凌示范区邰城南路 10 号</span>
                <span><Clock size={20} aria-hidden="true" />官网：www.empobio.com</span>
              </address>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="brand footer-brand" href="#top">
            <span><strong>安帝源生物科技</strong><small>EMPO BIOTECH</small></span>
          </a>
          <p>以原创生物材料技术服务急救、临床与生命健康。</p>
        </div>
        <div className="footer-links">
          <a href="#about">关于我们</a>
          <a href="#products">产品中心</a>
          <a href="#evidence">临床与证据</a>
          <a href="#contact">联系我们</a>
        </div>
        <div className="footer-meta">
          <span>© 2026 杨凌安帝源生物科技有限公司</span>
          <span>ICP备案号待补充</span>
        </div>
      </footer>
    </>
  )
}
