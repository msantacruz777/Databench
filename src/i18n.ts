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
        subheading: "Unleash the power of a Semantic Ontology.\nBuilt for speed, simplicity, flexibility, and iterative growth.",
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
        description: 'A comprehensive suite designed to seamlessly ingest, harmonize, and analyze your most critical data assets.',
        ingest: {
          title: 'Ingest & Harmonize',
          subtitle: 'Landing Zone',
          desc: 'Ingest raw data directly from source systems, intelligent harmonizing engines, and powerful analytics ready for action.'
        },
        governance: {
          title: 'Govern & Preserve Lineage',
          subtitle: 'Iterative policy enforcement',
          desc: 'Native lineage preservation tracing data back to the source, coupled with iterative data governance that evolves with your business.'
        },
        lineage: {
          title: 'Transform',
          subtitle: 'Auditable registry',
          desc: 'Complete transformation registry ensures you never lose sight of your data\'s journey.'
        },
        dedupe: {
          title: 'Deduplicate',
          subtitle: 'Intelligent record matching',
          desc: 'Automated deduplication algorithm to identify and collapse duplicate records across disparate systems, creating a single golden record.'
        },
        metrics: {
          title: 'Transform Your Business With Data Bench',
          items: [
            {
              value: '80%',
              label: 'Reduction in Data Project Costs'
            },
            {
              value: '75%',
              label: 'Reduction in Data Project Time'
            },
            {
              value: '85%',
              label: 'Reduction in Time to Value'
            }
          ]
        },
        security: {
          title: 'SECURITY',
          subtitle: 'The foundation of the Data Bench platform',
          desc: 'Our security-first approach ensures that enterprise-grade safety is baked into the very core of our semantic ontology, providing a bulletproof environment for all data operations.',
          badge: 'Enterprise Certified',
          features: [
            { title: 'Zero Trust Connectivity', desc: 'All endpoints are authenticated and authorized before any IP connectivity employing mutual TLS (mTLS) for identity bases session establishment.' },
            { title: 'Encryption at Rest', desc: 'Data Bench protects your data end‑to‑end with AES‑256 encrypted storage and TLS‑secured communication across every service and replication layer.' },
            { title: 'Encryption in Transit', desc: 'Encryption in transit using NIST‑certified cryptography, including AES‑256‑GCM for data plane encryption.' },
            { title: 'RBAC', desc: 'Granular role-based access control at the database column level.' }
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
          { badge: 'Finance', title: 'Post-Merger Risk Management & Integration', desc: "Unified 100+ million customer records from five banking systems in 18 hours. Tested by the bank's data team with 100% accuracy on all query results. The platform eliminated post‑merger data silos and delivered a transparent, auditable foundation for enterprise wide risk management. It also allowed complex temporal analysis of loan behavior." },
          { badge: 'Manufacturing', title: 'ERP Migration & Harmonization', desc: 'Data Bench facilitates migrating four legacy systems into a modern ERP. Source data moves into a unifying knowledge graph for 100% validation before migration, ensuring a risk-free transition and operational visibility. It uses advanced pattern matching and supervised ML with reinforcement learning.' },
          { badge: 'Private Equity', title: 'Unified Multi-ERP <br /> Analytics', desc: 'Implemented a centralized semantic layer to unify reporting across three distinct operational ERPs with inconsistent structures. The platform standardized terminology and logic, eliminated manual aggregation, and created a single source of truth that accelerated reporting while preserving operational independence' },
          { badge: 'Insurance', title: 'Regulatory Compliance Reporting', desc: 'The Data Bench platform was employed to replace fragmented workflows with a scalable infrastructure that unified data from three core legacy systems to automate the production of multi-regulatory reporting. This eliminated inconsistent business logic and manual errors, ensuring organizational confidence in reporting and preserving auditability of results.' },
          { badge: 'Retail', title: 'Unified Client-centred Analytics', desc: 'A major agriculture retail and investment consortium grew through acquisition and diversification. Data Bench unified disparate client lists into golden records. Temporary, transaction-specific consortia added complexity. The Data Bench knowledge graph proved critical for understanding deal flow, relationships, and participant records.' },
          { badge: 'Media', title: 'Semantic Modeling & Revenue Automation', desc: 'Created and deployed a centralized semantic model to automate complex KPI calculations to replace manual spreadsheets. The platform encoded intricate fee structures, surfaced hidden data errors, and established a scalable, auditable foundation fully aligned with business metrics.' }
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
              label: 'Reducción en Costos de Proyectos de Datos'
            },
            {
              value: '75%',
              label: 'Reducción en Tiempo de Proyectos de Datos'
            },
            {
              value: '85%',
              label: 'Reducción en el Tiempo de Valor'
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
            { title: 'Cifrado en reposo', desc: 'Data Bench protege sus datos de extremo a extremo con almacenamiento cifrado AES-256 y comunicación protegida por TLS en cada servicio y capa de replicación.' },
            { title: 'Cifrado en tránsito', desc: 'NetFoundry proporciona cifrado en tránsito de extremo a extremo y de confianza cero mediante criptografía certificada por el NIST, que incluye AES-256-GCM para el cifrado del plano de datos y TLS mutuo (mTLS) para el establecimiento de sesiones basadas en la identidad.' },
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
          { badge: 'Manufactura', title: 'Migración y Armonización de ERP', desc: 'Data Bench desplegado para facilitar la migración de cuatro sistemas heredados a una plataforma ERP moderna. Los datos de los sistemas de origen se trasladaron a un grafo de conocimiento unificador para la validación del 100% de los datos antes de la migración. Este proceso garantiza una transición sin riesgos y proporciona visibilidad operativa durante toda la migración. La plataforma Data Bench utiliza coincidencia de patrones avanzada y ML supervisado con aprendizaje por refuerzo para mejorar y automatizar el proceso.' },
          { badge: 'Capital Privado', title: 'Analítica Unificada <br /> Multi-ERP', desc: 'Implementó una capa semántica centralizada para unificar los informes en tres sistemas operativos ERP distintos con estructuras inconsistentes. La plataforma estandarizó la terminología y la lógica, eliminó la agregación manual y creó una única fuente de verdad que aceleró los informes mientras preservaba la independencia operativa' },
          { badge: 'Seguros', title: 'Cumplimiento Regulatorio e Informes', desc: 'La plataforma Data Bench se utilizó para reemplazar flujos de trabajo fragmentados con una infraestructura escalable que unificó datos de tres sistemas heredados para automatizar la producción de informes regulatorios de múltiples fuentes. Esto eliminó la lógica comercial inconsistente y los errores manuales, garantizando la confianza organizacional en los informes y preservando la auditabilidad de los resultados.' },
          { badge: 'Retail', title: 'Analítica Unificada <br /> Centrada en el Cliente', desc: 'Un importante consorcio minorista y de inversión en el sector agrícola había crecido mediante adquisiciones y diversificación. Data Bench ingirió múltiples listas de clientes dispares y creó un registro dorado unificado para cada cliente y proveedor. Surgió una complejidad única ya que algunos socios y clientes formaron consorcios temporales específicos para transacciones, lo que creó un patrón secuencial de relaciones que existían, estaban vinculadas a una transacción y luego se disolvían. El grafo de conocimiento de Data Bench fue fundamental para comprender y registrar el flujo de transacciones y los participantes.' },
          { badge: 'Media', title: 'Modelado Semántico y Automatización de Ingresos', desc: 'Creado y desplegado un modelo semántico centralizado para automatizar cálculos complejos de KPI para reemplazar las hojas de cálculo manuales. La plataforma codificó estructuras de tarifas intrincadas, sacó a la luz errores de datos ocultos y estableció una base escalable y auditable totalmente alineada con las métricas comerciales.' }
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
              label: 'خفض تكاليف مشاريع البيانات'
            },
            {
              value: '75%',
              label: 'تقليل وقت مشاريع البيانات'
            },
            {
              value: '85%',
              label: 'تقليل وقت الوصول إلى القيمة'
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
            { title: 'التشفير أثناء الراحة', desc: 'تحمي Data Bench بياناتك من البداية إلى النهاية باستخدام تخزين مشفر بتنسيق AES-256 واتصالات مؤمنة ببروتوكول TLS عبر كل خدمة وطبقة تكرار.' },
            { title: 'التشفير أثناء الانتقال', desc: 'توفر NetFoundry تشفيرًا أثناء الانتقال من البداية إلى النهاية وثقة صفرية باستخدام تشفير معتمد من NIST، بما في ذلك AES-256-GCM لتشفير مستوى البيانات وبروتوكول TLS المتبادل (mTLS) لإنشاء جلسات قائمة على الهوية.' },
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
          { badge: 'التصنيع', title: 'هجرة نظام تخطيط موارد المؤسسات (ERP) والتنسيق', desc: 'تم نشر Data Bench لتسهيل عملية الهجرة من أربعة أنظمة قديمة إلى منصة تخطيط موارد المؤسسات (ERP) حديثة. تم نقل البيانات من هذه الأنظمة المصدر إلى رسم معرفة موحد للتحقق من البيانات بنسبة 100٪ قبل الهجرة. تضمن هذه العملية انتقالاً خالياً من المخاطر وتوفر رؤية تشغيلية طوال عملية الهجرة. تستخدم منصة Data Bench مطابقة الأنماط المتقدمة والتعلم الآلي الخاضع للإشراف مع التعلم المعزز لتعزيز العملية وأتمتتها.' },
          { badge: 'الملكية الخاصة', title: 'تحليلات موحدة لعدة أنظمة تخطيط موارد المؤسسات (ERP)', desc: 'تم تنفيذ طبقة دلالية مركزية لتوحيد التقارير عبر ثلاثة أنظمة تشغيل ERP متميزة ذات هياكل غير متسقة. قامت المنصة بتوحيد المصطلحات والمنطق، وقضت على التجميع اليدوي، وأنشأت مصدراً واحداً للحقيقة أدى إلى تسريع إعداد التقارير مع الحفاظ على الاستقلال التشغيلي' },
          { badge: 'التأمين', title: 'الامتثال التنظيمي والتقارير', desc: 'تم استخدام منصة Data Bench لاستبدال سير العمل المجزأ ببنية تحتية قابلة للتطوير قامت بتوحيد البيانات من ثلاثة أنظمة قديمة لأتمتة إنتاج التقارير التنظيمية متعددة المصادر. أدى ذلك إلى القضاء على منطق العمل غير المتسق والأخطاء اليدوية، مما ضمن الثقة المؤسسية في التقارير وحافظ على إمكانية تدقيق النتائج.' },
          { badge: 'تجارة التجزئة', title: 'تحليلات موحدة متمحورة حول العميل', desc: 'نما اتحاد استثماري وتجزئة كبير في القطاع الزراعي من خلال الاستحواذ والتنويع. استوعبت Data Bench قوائم عملاء متباينة متعددة وأنشأت سجلاً ذهبياً موحداً لكل عميل ومورد. ظهرت تعقيدات فريدة حيث شكل بعض الشركاء والعملاء تحالفات مؤقتة خاصة بالمعاملات، مما أدى إلى إنشاء نمط متسلسل من العلاقات التي كانت موجودة، ومرتبطة بمعاملة، ثم تم حلها. كان رسم معرفة Data Bench أمراً حاسماً لفهم وتسجيل تدفق الصفقات والمشاركين.' },
          { badge: 'الإعلام', title: 'النمذجة الدلالية وأتمتة الإيرادات', desc: 'تم إنشاء ونشر نموذج دلالي مركزي لأتمتة حسابات مؤشرات الأداء الرئيسية (KPI) المعقدة لاستبدال جداول البيانات اليدوية. قامت المنصة بتشفير هياكل الرسوم المعقدة، وكشفت عن أخطاء البيانات المخفية، وأنشأت أساساً قابلاً للتطوير والتدقيق متوافقاً تماماً مع مقاييس الأعمال.' }
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
