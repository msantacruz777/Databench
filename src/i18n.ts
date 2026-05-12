import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        platform: 'Platform',
        customer: 'Use Cases',
        company: 'Company',
        aiDataLayer: 'AI Data Layer',
        blog: 'Blog',
        requestDemo: 'Request a Demo'
      },
      hero: {
        quote: 'From Data Chaos to Clarity.',
        subheading: "Unleash the power of Semantic Ontology.\nBuilt for speed, simplicity, flexibility, and iterative growth.",
        bestUseCase: {
          badge: 'Best Use Case',
          quote: 'Facing the regulatory pressure of IFRS compliance, a leading Caribbean financial and insurance group successfully transformed a fragmented, manual reporting process into a unified data environment.',
          description: 'By deploying Data Bench, the organization migrated from legacy spreadsheet workflows to a fully automated, centralized data model in just three weeks.',
          cta: 'Read Full Story'
        }
      },
      platform: {
        label: 'PLATFORM',
        title: 'The Data Modernization <br /> Workbench',
        description: 'A comprehensive suite designed to seamlessly ingest, harmonize, and analyze your most critical assets.',
        ingest: {
          title: 'Ingest & Harmonize',
          subtitle: 'Landing zones',
          desc: 'Ingest raw data directly from source systems, intelligent harmonizing engines, and powerful analytics ready for action.'
        },
        governance: {
          title: 'Lineage & Governance',
          subtitle: 'Iterative policy enforcement',
          desc: 'Native lineage preservation tracing data back to the source, coupled with iterative data governance that evolves with your business.'
        },
        lineage: {
          title: 'Transformation',
          subtitle: 'Auditable registry',
          desc: 'Complete transformation registry ensures you never lose sight of your data\'s journey.'
        },
        dedupe: {
          title: 'Deduplication',
          subtitle: 'Intelligent record matching',
          desc: 'Automated deduplication algorithm to identify and collapse duplicate records across disparate systems, creating a single golden record.'
        },
        metrics: {
          title: 'Transform Your Business With Data Bench',
          items: [
            {
              value: '80%',
              label: 'Reduction in Data Project Costs',
              desc: 'Requires a fraction of traditional resources'
            },
            {
              value: '75%',
              label: 'Reduction in Data Project Time',
              desc: 'Implement in weeks versus months'
            },
            {
              value: '85%',
              label: 'Reduction in Time to Value',
              desc: 'See value immediately'
            }
          ]
        },
        security: {
          title: 'SECURITY',
          subtitle: 'The foundation of the Data Bench platform',
          desc: 'Our security-first approach ensures that enterprise-grade safety is baked into the very core of our semantic ontology, providing a bulletproof environment for all data operations.',
          badge: 'Enterprise Certified',
          features: [
            { title: 'Zero Trust Connectivity', desc: 'All endpoints authenticated and authorized before any IP connectivity' },
            { title: 'Encryption at Rest', desc: 'TLS and Curve ZMQ' },
            { title: 'Encryption in Transit', desc: 'TLS and CurveZMQ' },
            { title: 'RBAC', desc: 'Granular role-based access control' }
          ]
        },
        result: {
          title: 'FAST AND COST EFFECTIVE DATA MODERNIZATION',
          subtitle: 'Experience the semantic advantage',
          desc: 'A semantic ontology that inherently enforces data governance while remaining iterative and flexible enough to adapt to your evolving business needs.',
          features: [
            'Automated Graph Population',
            'Auditable Data Lineage',
            'Iterative Schema Design',
            'Automated Deduplication',
            'Transformation Registry',
            'governance enforcement'
          ]
        }
      },
      useCases: {
        label: 'USE CASES',
        title: 'PROVEN ACROSS INDUSTRIES',
        subtitle: 'Scalable outcomes from governance to integration.',
        viewAll: 'Request a Demo',
        items: [
          { badge: 'Finance', title: 'Post-Merger Risk Management & Integration', desc: 'Unified 122 million customer records from five banking systems with 100% accuracy in 18 hours. The platform eliminated post‑merger data silos, ensured error‑free payment processing, and delivered a transparent, auditable foundation for enterprise‑wide risk management.' },
          { badge: 'Media', title: 'Semantic Modeling & Revenue Automation', desc: 'Deployed a centralized semantic model to automate complex Net Revenue calculations and replace manual spreadsheets. The platform encoded intricate fee structures, surfaced hidden data errors, and established a scalable, auditable foundation fully aligned with production revenue metrics.' },
          { badge: 'Private Equity', title: 'Unified Multi-ERP <br /> Analytics', desc: 'Implemented a centralized semantic layer to unify reporting across three ERPs with inconsistent structures. The platform standardized terminology and logic, eliminated manual aggregation, and created a single source of truth that accelerated reporting while preserving operational independence' },
          { badge: 'Manufacturing', title: 'Automated ERP Migration & Harmonization', desc: 'Data Bench was deployed to automate the migration from four legacy systems into the Infor M3 ERP platform. The data from these four source systems were moved into a unifying knowledge graph for 100% validation of data prior to uploading to the new ERP.  This process ensured a risk-free transition and provided operational visibility throughout the migration. A key requirement of this project was to unify three disparate parts inventories. The Data Bench platform used advanced pattern matching and supervised ML with reinforcement learning to create a new, clean master list of parts.' },
          { badge: 'Retail', title: 'Unified Client-centred Analytics', desc: 'A major retail and investment consortium in the agriculture sector had grown through acquisition and diversification. Data Bench ingested their multiple client lists and created a unified golden record for each customer or partner. There was a further requirement to track how some partners and clients formed consortia which existed only until a transaction completed. This created a sequential pattern of relationships that existed, were tied to a transaction, and then released.  Such patterns can be tracked in the Data Bench knowledge graph to understand deal flow, or in general to highlight the potential for fraud or money laundering' },
          { badge: 'Insurance', title: 'Regulatory Compliance & IFRS Reporting', desc: 'Replaced fragmented workflows with a scalable infrastructure that unified data from three core legacy systems. The platform eliminated inconsistent business logic and manual errors, ensuring the organization met IFRS deadlines with a fully auditable reporting process.' }
        ]
      },
      company: {
        title: 'Company',
        mission: 'Mission Statement',
        team: 'Our Team',
        social: 'Social Media',
        contact: 'Contact'
      },
      linkedin: {
        title: 'Blog'
      }
    }
  },
  es: {
    translation: {
      nav: {
        platform: 'Plataforma',
        customer: 'Casos de Uso',
        company: 'Empresa',
        aiDataLayer: 'Capa de Datos IA',
        blog: 'Blog',
        requestDemo: 'Solicitar una Demo'
      },
      hero: {
        quote: 'Del caos de los datos a la claridad.',
        subheading: "Libere el poder de la ontología semántica.\nDiseñado para ofrecer velocidad, sencillez, flexibilidad y crecimiento iterativo.",
        bestUseCase: {
          badge: 'Mejor Caso de Uso',
          quote: 'Enfrentando la presión regulatoria del cumplimiento de la NIIF, un grupo financiero y de seguros líder en el Caribe transformó con éxito un proceso de informes manual y fragmentado en un entorno de datos unificado.',
          description: 'Al implementar Data Bench, la organización migró de flujos de trabajo de hojas de cálculo heredadas a un modelo de datos centralizado y totalmente automatizado en solo tres semanas.',
          cta: 'Leer Historia Completa'
        }
      },
      platform: {
        label: 'PLATAFORMA',
        title: 'El Banco de Trabajo de <br /> Modernización de Datos',
        description: 'Una suite integral diseñada para ingerir, armonizar y analizar sin problemas sus activos más críticos.',
        ingest: {
          title: 'Ingest & Harmonize',
          subtitle: 'Zonas de aterrizaje',
          desc: 'Ingiera datos brutos directamente desde los sistemas de origen, motores de armonización inteligentes y análisis potentes listos para la acción.'
        },
        governance: {
          title: 'Linaje y Gobernanza',
          subtitle: 'Cumplimiento de políticas iterativas',
          desc: 'Preservación nativa del linaje rastreando los datos hasta la fuente, junto con un gobierno de datos iterativo que evoluciona con su negocio.'
        },
        lineage: {
          title: 'Transformación',
          subtitle: 'Registro auditable',
          desc: 'El registro de transformación completo garantiza que nunca pierda de vista el recorrido de sus datos.'
        },
        dedupe: {
          title: 'Deduplicación',
          subtitle: 'Coincidencia de registros inteligente',
          desc: 'Algoritmo de deduplicación automatizado para identificar y colapsar registros duplicados en sistemas dispares, creando un único registro dorado.'
        },
        metrics: {
          title: 'Transforme su Negocio con Data Bench',
          items: [
            {
              value: '80%',
              label: 'Reducción en Costos de Proyectos de Datos',
              desc: 'Requiere una fracción de los recursos tradicionales'
            },
            {
              value: '75%',
              label: 'Reducción en Tiempo de Proyectos de Datos',
              desc: 'Implementación en semanas en lugar de meses'
            },
            {
              value: '85%',
              label: 'Reducción en el Tiempo de Valor',
              desc: 'Vea resultados de inmediato'
            }
          ]
        },
        security: {
          title: 'SEGURIDAD',
          subtitle: 'La base de la plataforma Data Bench',
          desc: 'Nuestro enfoque que prioriza la seguridad garantiza que la seguridad de nivel empresarial esté integrada en el núcleo mismo de nuestra ontología semántica, proporcionando un entorno a prueba de balas para todas las operaciones de datos.',
          badge: 'Certificado para Empresas',
          features: [
            { title: 'Conectividad Zero Trust', desc: 'Todos los puntos finales autenticados y autorizados antes de cualquier conectividad IP' },
            { title: 'Cifrado en reposo', desc: 'TLS y Curve ZMQ' },
            { title: 'Cifrado en tránsito', desc: 'TLS and CurveZMQ' },
            { title: 'RBAC', desc: 'Control de acceso granular basado en roles' }
          ]
        },
        result: {
          title: 'MODERNIZACIÓN DE DATOS RÁPIDA Y RENTABLE',
          subtitle: 'Experimente la ventaja semántica',
          desc: 'Una ontología semántica que impone inherentemente la gobernanza de datos mientras permanece lo suficientemente iterativa y flexible para adaptarse a sus necesidades comerciales en evolución.',
          features: [
            'Población de Grafos Automatizada',
            'Linaje de Datos Auditable',
            'Diseño de Esquema Iterativo',
            'Deduplicación Automatizada',
            'Registro de Transformación',
            'Gobernanza de Datos Impuesta'
          ]
        }
      },
      useCases: {
        label: 'CASOS DE USO',
        title: 'PROBADO EN TODAS LAS INDUSTRIAS',
        subtitle: 'Resultados escalables desde la gobernanza hasta la integración.',
        viewAll: 'Solicitar una Demo',
        items: [
          { badge: 'Finanzas', title: 'Gestión de Riesgos e Integración Post-Fusión', desc: 'Unificó 122 millones de registros de clientes en cinco sistemas bancarios con un 100% de precisión en 18 horas. La plataforma eliminó los silos de datos posteriores a la fusión, aseguró un procesamiento de pagos sin errores y brindó una base transparente y auditable para la gestión de riesgos en toda la empresa.' },
          { badge: 'Media', title: 'Modelado Semántico y Automatización de Ingresos', desc: 'Desplegó un modelo semántico centralizado para automatizar cálculos complejos de ingresos netos y reemplazar las hojas de cálculo manuales. La plataforma codificó estructuras de tarifas intrincadas, sacó a la luz errores de datos ocultos y estableció una base escalable y auditable totalmente alineada con las métricas de ingresos de producción.' },
          { badge: 'Capital Privado', title: 'Analítica Unificada <br /> Multi-ERP', desc: 'Implementó una capa semántica centralizada para unificar los informes en tres ERP con estructuras inconsistentes. La plataforma estandarizó la terminología y la lógica, eliminó la agregación manual y creó una única fuente de verdad que aceleró los informes mientras preservaba la independencia operativa' },
          { badge: 'Manufactura', title: 'Migración y Armonización Automatizada de ERP', desc: 'Data Bench se implementó para automatizar la migración de cuatro sistemas heredados a la plataforma ERP Infor M3. Los datos de estos cuatro sistemas de origen se trasladaron a un grafo de conocimiento unificado para la validación al 100% de los datos antes de cargarlos en el nuevo ERP. Este proceso garantizó una transición libre de riesgos y proporcionó visibilidad operativa durante toda la migración. Un requisito clave de este proyecto fue unificar tres inventarios de piezas dispares. La plataforma Data Bench utilizó coincidencia de patrones avanzada y ML supervisado con aprendizaje por refuerzo para crear una lista maestra de piezas nueva y limpia.' },
          { badge: 'Retail', title: 'Analítica Unificada <br /> Centrada en el Cliente', desc: 'Un importante consorcio minorista y de inversión en el sector agrícola había crecido mediante adquisiciones y diversificación. Data Bench ingirió sus múltiples listas de clientes y creó un registro dorado unificado para cada cliente o socio. Hubo un requisito adicional para rastrear cómo algunos socios y clientes formaban consorcios que existían solo hasta que se completaba una transacción. Esto creó un patrón secuencial de relaciones que existían, estaban vinculadas a una transacción y luego se liberaban. Tales patrones pueden rastrearse en el grafo de conocimiento de Data Bench para comprender el flujo de transacciones o, en general, para resaltar el potencial de fraude o lavado de dinero.' },
          { badge: 'Seguros', title: 'Cumplimiento Regulatorio e Informes NIIF', desc: 'Reemplazó flujos de trabajo manuales con una infraestructura escalable que unificó datos de tres sistemas heredados. La plataforma eliminó errores manuales y lógica inconsistente, asegurando el cumplimiento de las NIIF con un proceso de informes totalmente auditable y automatizado.' }
        ]
      },
      company: {
        title: 'Empresa',
        mission: 'Declaración de Misión',
        team: 'Nuestro Equipo',
        social: 'Redes Sociales',
        contact: 'Contacto'
      },
      linkedin: {
        title: 'Blog'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        platform: 'المنصة',
        customer: 'حالات الاستخدام',
        company: 'الشركة',
        aiDataLayer: 'طبقة بيانات الذكاء الاصطناعي',
        blog: 'المدونة',
        requestDemo: 'طلب عرض تجريبي'
      },
      hero: {
        quote: 'من فوضى البيانات إلى الوضوح.',
        subheading: "أطلق العنان لقوة الأنطولوجيا الدلالية.\nصُممت من أجل السرعة والبساطة والمرونة والنمو المتكرر.",
        bestUseCase: {
          badge: 'أفضل حالة استخدام',
          quote: 'في مواجهة الضغوط التنظيمية للامتثال للمعايير الدولية لإعداد التقارير المالية (IFRS)، نجحت مجموعة مالية وتأمينية رائدة في منطقة البحر الكاريبي في تحويل عملية إعداد تقارير يدوية ومجزأة إلى بيئة بيانات موحدة.',
          description: 'من خلال نشر Data Bench, انتقلت المؤسسة من سير عمل جداول البيانات القديمة إلى نموذج بيانات مركزي ومؤتمت بالكامل في غضون ثلاثة أسابيع فقط.',
          cta: 'اقرأ القصة كاملة'
        }
      },
      platform: {
        label: 'المنصة',
        title: 'منصة عمل <br /> تحديث البيانات',
        description: 'مجموعة شاملة مصممة لاستيعاب أصولك الأكثر أهمية وتنسيقها وتحليلها بسلاسة.',
        ingest: {
          title: 'الاستيعاب والتنسيق',
          subtitle: 'مناطق الهبوط',
          desc: 'استيعاب البيانات الخام مباشرة من أنظمة المصدر، ومحركات تنسيق ذكية، وتحليلات قوية جاهزة للعمل.'
        },
        governance: {
          title: 'النسب والحوكمة',
          subtitle: 'فرض السياسات المتكرر',
          desc: 'حفظ النسب الأصلي لتتبع البيانات وصولاً إلى المصدر، بالإضافة إلى حوكمة البيانات المتكررة التي تتطور مع عملك.'
        },
        lineage: {
          title: 'التحويل',
          subtitle: 'سجل قابل للتدقيق',
          desc: 'يضمن سجل التحويل الكامل عدم فقدان مسار رحلة بياناتك أبداً.'
        },
        dedupe: {
          title: 'إزالة التكرار',
          subtitle: 'مطابقة السجلات الذكية',
          desc: 'خوارزمية إزالة التكرار الآلية لتحديد وطي السجلات المكررة عبر الأنظمة المتباينة، مما يؤدي إلى إنشاء سجل ذهبي واحد.'
        },
        metrics: {
          title: 'حول عملك مع Data Bench',
          items: [
            {
              value: '80%',
              label: 'خفض تكاليف مشاريع البيانات',
              desc: 'يتطلب جزءً بسيطاً من الموارد التقليدية'
            },
            {
              value: '75%',
              label: 'تقليل وقت مشاريع البيانات',
              desc: 'التنفيذ في أسابيع بدلاً من شهور'
            },
            {
              value: '85%',
              label: 'تقليل وقت الوصول إلى القيمة',
              desc: 'شاهد القيمة على الفور'
            }
          ]
        },
        security: {
          title: 'الأمان',
          subtitle: 'أساس منصة Data Bench',
          desc: 'يضمن نهجنا الذي يركز على الأمان أولاً دمج السلامة على مستوى المؤسسات في صميم الأنطولوجيا الدلالية لدينا، مما يوفر بيئة مضادة للرصاص لجميع عمليات البيانات.',
          badge: 'معتمد للمؤسسات',
          features: [
            { title: 'اتصال الثقة الصفرية', desc: 'تتم مصادقة جميع نقاط النهاية وتفويضها قبل أي اتصال IP' },
            { title: 'التشفير أثناء الراحة', desc: 'TLS و Curve ZMQ' },
            { title: 'التشفير أثناء الانتقال', desc: 'TLS and CurveZMQ' },
            { title: 'RBAC', desc: 'التحكم الدقيق في الوصول القائم على الأدوار' }
          ]
        },
        result: {
          title: 'تحديث بيانات سريع وفعال من حيث التكلفة',
          subtitle: 'اختبر ميزة الدلالية',
          desc: 'أنطولوجيا دلالية تفرض بطبيعتها حوكمة البيانات مع بقائها متكررة ومرنة بما يكفي للتكيف مع احتياجات عملك المتطورة.',
          features: [
            'تعبئة الرسم البياني الآلية',
            'نسب بيانات قابل للتدقيق',
            'تصميم مخطط متكرر',
            'إزالة التكرار الآلي',
            'سجل التحويل',
            'فرض حوكمة البيانات'
          ]
        }
      },
      useCases: {
        label: 'حالات الاستخدام',
        title: 'مثبت عبر الصناعات',
        subtitle: 'نتائج قابلة للتطوير من الحوكمة إلى التكامل.',
        viewAll: 'طلب عرض تجريبي',
        items: [
          { badge: 'التمويل', title: 'إدارة مخاطر ما بعد الاندماج والتكامل', desc: 'تم توحيد 122 مليون سجل عملاء من خمسة أنظمة مصرفية بدقة 100٪ في 18 ساعة. قضت المنصة على صوامع البيانات بعد الاندماج، وضمنت معالجة دفع خالية من الأخطاء، وقدمت أساسًا شفافًا وقابلًا للتدقيق لإدارة المخاطر على مستوى المؤسسة.' },
          { badge: 'الإعلام', title: 'النمذجة الدلالية وأتمتة الإيرادات', desc: 'نشر نموذجاً دلالياً مركزياً لأتمتة حسابات صافي الإيرادات المعقدة واستبدال جداول البيانات اليدوية. قامت المنصة بتشفير هياكل الرسوم المعقدة، وكشفت عن أخطاء البيانات المخفية، وأنشأت أساساً قابلاً للتطوير والتدقيق متوافقاً تماماً مع مقاييس إيرادات الإنتاج.' },
          { badge: 'الملكية الخاصة', title: 'تحليلات موحدة لعدة أنظمة تخطيط موارد المؤسسات (ERP)', desc: 'تم تنفيذ طبقة دلالية مركزية لتوحيد التقارير عبر ثلاثة أنظمة لتخطيط موارد المؤسسات (ERPs) ذات هياكل غير متسقة. قامت المنصة بتوحيد المصطلحات والمنطق، وقضت على التجميع اليدوي، وأنشأت مصدراً واحداً للحقيقة أدى إلى تسريع إعداد التقارير مع الحفاظ على الاستقلال التشغيلي' },
          { badge: 'التصنيع', title: 'أتمتة هجرة نظام تخطيط موارد المؤسسات (ERP) والتنسيق', desc: 'تم نشر Data Bench لأتمتة عملية الهجرة من أربعة أنظمة قديمة إلى منصة Infor M3 ERP. تم نقل البيانات من هذه الأنظمة المصدر الأربعة إلى رسم معرفة موحد للتحقق من البيانات بنسبة 100٪ قبل تحميلها على نظام تخطيط موارد المؤسسات الجديد. ضمنت هذه العملية انتقالاً خالياً من المخاطر ووفرت رؤية تشغيلية طوال عملية الهجرة. كان المطلب الرئيسي لهذا المشروع هو توحيد ثلاثة مخازن قطع غيار متباينة. استخدمت منصة Data Bench مطابقة الأنماط المتقدمة والتعلم الآلي الخاضع للإشراف مع التعلم المعزز لإنشاء قائمة رئيسية جديدة ونظيفة لقطع الغيار.' },
          { badge: 'تجارة التجزئة', title: 'تحليلات موحدة متمحورة حول العميل', desc: 'نما اتحاد استثماري وتجزئة كبير في القطاع الزراعي من خلال الاستحواذ والتنويع. استوعبت Data Bench قوائم عملائهم المتعددة وأنشأت سجلاً ذهبياً موحداً لكل عميل أو شريك. كان هناك مطلب إضافي لتتبع كيفية تشكيل بعض الشركاء والعملاء لاتحادات كانت موجودة فقط حتى اكتمال المعاملة. أدى ذلك إلى إنشاء نمط متسلسل من العلاقات التي كانت موجودة، ومرتبطة بمعاملة، ثم تم تحريرها. يمكن تتبع مثل هذه الأنماط في رسم معرفة Data Bench لفهم تدفق الصفقات، أو بشكل عام لتسليط الضوء على احتمالات الاحتيال أو غسيل الأموال.' },
          { badge: 'التأمين', title: 'الامتثال التنظيمي وتقارير المعايير الدولية لإعداد التقارير المالية', desc: 'استبدلت سير عمل يدوي ببنية تحتية قابلة للتطوير وحدت البيانات من ثلاثة أنظمة قديمة. قضت المنصة على الأخطاء اليدوية والمنطق غير المتسق، مما ضمن الوفاء بالمواعيد النهائية لـ IFRS مع عملية إعداد تقارير مؤتمتة.' }
        ]
      },
      company: {
        title: 'الشركة',
        mission: 'بيان المهمة',
        team: 'فريقنا',
        social: 'وسائل التواصل الاجتماعي',
        contact: 'اتصل بنا'
      },
      linkedin: {
        title: 'المدونة'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
