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
          subtitle: 'Landing zones & real-time processing',
          desc: 'Robust landing zones to capture raw data, intelligent harmonizing engines, and powerful analytics ready for action.'
        },
        governance: {
          title: 'Lineage & Governance',
          subtitle: 'Iterative policy enforcement',
          desc: 'Iterative data governance that evolves with your business, ensuring quality and compliance without slowing you down.'
        },
        lineage: {
          title: 'Transformation',
          subtitle: 'Registry & preservation',
          desc: 'Full lineage preservation coupled with a centralized transformation registry. Never lose sight of your data\'s journey.'
        },
        dedupe: {
          title: 'Deduplication',
          subtitle: 'Intelligent record matching',
          desc: 'Automated deduplication engines that identify and merge duplicate records across disparate systems.'
        },
        security: {
          title: 'SECURITY',
          subtitle: 'The foundation of the Data Bench platform',
          desc: 'Our security-first approach ensures that enterprise-grade safety is baked into the very core of our semantic ontology, providing a bulletproof environment for all data operations.',
          badge: 'Enterprise Certified',
          features: [
            { title: 'Zero Trust', desc: 'Identity-based authentication for every request' },
            { title: 'Encryption at Rest', desc: 'AES-256 protection for all stored assets' },
            { title: 'Encryption in Transit', desc: 'TLS 1.3 secured data movement' },
            { title: 'RBAC', desc: 'Granular role-based access control' }
          ]
        },
        result: {
          title: 'THE RESULT',
          subtitle: 'Experience the Semantic Advantage',
          desc: 'A semantic ontology that inherently enforces data governance while remaining iterative and flexible enough to adapt to your evolving business needs.',
          features: [
            'Automated Graph Population',
            'Auditable Data Lineage',
            'Iterative Schema Design',
            'Automated Deduplication',
            'Transformation Registry',
            'Data Governance Enforced'
          ]
        }
      },
      useCases: {
        label: 'USE CASES',
        title: 'PROVEN ACROSS INDUSTRIES',
        subtitle: 'Scalable outcomes from governance to integration.',
        viewAll: 'Request a Demo',
        items: [
          { badge: 'Banking', title: 'Post-Merger Risk Management & Integration', desc: 'Integrated and indexed 122 million customer records across five banking systems with 100% accuracy in just 18 hours. By unifying disparate data post-merger, the platform eliminated silos and ensured error-free payment processing. This streamlined operational efficiency and provided a transparent, auditable foundation for enterprise risk management.' },
          { badge: 'Media', title: 'Semantic Modeling & Revenue Automation', desc: 'Implemented a centralized semantic model to automate complex Net Revenue calculations, replacing manual spreadsheet workflows. The platform successfully encoded intricate fee structures while uncovering critical data errors that had previously gone undetected in legacy processes. This established a scalable, auditable foundation that eliminated calculation ambiguity and secured 100% alignment with production metrics.' },
          { badge: 'Private Equity', title: 'Unified Multi-ERP Analytics', desc: 'Implemented a centralized semantic layer to provide unified reporting across three independent ERP systems with disparate data structures. The platform standardized inconsistent terminology and logic, reducing complex, manual data aggregation into a single source of truth. This established a common analytics foundation that dramatically reduced reporting times while allowing each brand to retain full operational independence.' },
          { badge: 'Manufacturing', title: 'Automated ERP Migration & Harmonization', desc: 'Executed an automated data journey to migrate legacy datasets into the Infor M3 platform while resolving duplicate records into validated "golden records". The platform consolidated multiple source systems into a knowledge graph, eliminating migration faults and activating enterprise-wide management reporting before the final go-live. This process ensured a risk-free transition and maintained operational visibility throughout the migration.' },
          { badge: 'Agriculture', title: 'Automated Compliance & Ingestion', desc: 'Automated complex compliance rules at ingestion, preventing downstream anomalies and reducing manual review requirements by 85%. This validation engine ensured only high-quality, pre-cleared data entered the pipeline, improving both accuracy and processing speed.' },
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
          subtitle: 'Zonas de aterrizaje y procesamiento en tiempo real',
          desc: 'Zonas de aterrizaje robustas para capturar datos sin procesar, motores de armonización inteligentes y análisis potentes listos para la acción.'
        },
        governance: {
          title: 'Linaje y Gobernanza',
          subtitle: 'Cumplimiento de políticas iterativas',
          desc: 'Gobernanza de datos iterativa que evoluciona con su negocio, garantizando la calidad y el cumplimiento sin frenarlo.'
        },
        lineage: {
          title: 'Transformación',
          subtitle: 'Registro y preservación',
          desc: 'Preservación completa del linaje junto con un registro de transformación centralizado. Nunca pierda de vista el recorrido de sus datos.'
        },
        dedupe: {
          title: 'Deduplicación',
          subtitle: 'Coincidencia de registros inteligente',
          desc: 'Motores de deduplicación automatizados que identifican y fusionan registros duplicados en sistemas dispares.'
        },
        security: {
          title: 'SEGURIDAD',
          subtitle: 'La base de la plataforma Data Bench',
          desc: 'Nuestro enfoque que prioriza la seguridad garantiza que la seguridad de nivel empresarial esté integrada en el núcleo mismo de nuestra ontología semántica, proporcionando un entorno a prueba de balas para todas las operaciones de datos.',
          badge: 'Certificado para Empresas',
          features: [
            { title: 'Zero Trust', desc: 'Autenticación basada en identidad para cada solicitud' },
            { title: 'Cifrado en reposo', desc: 'Protección AES-256 para todos los activos almacenados' },
            { title: 'Cifrado en tránsito', desc: 'Movimiento de datos asegurado con TLS 1.3' },
            { title: 'RBAC', desc: 'Control de acceso granular basado en roles' }
          ]
        },
        result: {
          title: 'EL RESULTADO',
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
          { badge: 'Banca', title: 'Gestión de Riesgos e Integración Post-Fusión', desc: 'Integró e indexó 122 millones de registros de clientes en cinco sistemas bancarios con un 100% de precisión en solo 18 horas. Al unificar datos dispares tras la fusión, la plataforma eliminó los silos y aseguró un procesamiento de pagos sin errores. Esto optimizó la eficiencia operativa y proporcionó una base transparente y auditable para la gestión de riesgos empresariales.' },
          { badge: 'Media', title: 'Modelado Semántico y Automatización de Ingresos', desc: 'Implementó un modelo semántico centralizado para automatizar cálculos complejos de Ingresos Netos, reemplazando los flujos de trabajo manuales en hojas de cálculo. La plataforma codificó con éxito estructuras de tarifas intrincadas al tiempo que descubría errores de datos críticos que anteriormente no se habían detectado en los procesos heredados. Esto estableció una base escalable y auditable que eliminó la ambigüedad en los cálculos y aseguró una alineación del 100% con las métricas de producción.' },
          { badge: 'Capital Privado', title: 'Analítica Unificada Multi-ERP', desc: 'Implementó una capa semántica centralizada para proporcionar informes unificados a través de tres sistemas ERP independientes con estructuras de datos dispares. La plataforma estandarizó la terminología y la lógica inconsistentes, reduciendo la agregación de datos manual y compleja en una única fuente de verdad. Esto estableció una base de análisis común que redujo drásticamente los tiempos de informes, permitiendo al mismo tiempo que cada marca conservara su plena independencia operativa.' },
          { badge: 'Manufactura', title: 'Migración y Armonización Automatizada de ERP', desc: 'Ejecutó un viaje de datos automatizado para migrar conjuntos de datos heredados a la plataforma Infor M3 mientras resolvía registros duplicados en "registros maestros" validados. La plataforma consolidó múltiples sistemas fuente en un grafo de conocimiento, eliminando fallas de migración y activando informes de gestión para toda la empresa antes de la puesta en marcha final. Este proceso aseguró una transición sin riesgos y mantuvo la visibilidad operativa durante toda la migración.' },
          { badge: 'Agricultura', title: 'Cumplimiento e Ingesta Automatizada', desc: 'Automatizó reglas de cumplimiento en la ingesta, evitando anomalías y reduciendo la revisión manual en un 85%. Este motor de validación aseguró que solo ingresaran datos de alta calidad en el flujo analítico, mejorando significativamente la precisión y la velocidad de procesamiento.' },
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
          subtitle: 'مناطق الهبوط والمعالجة في الوقت الفعلي',
          desc: 'مناطق هبوط قوية لالتقاط البيانات الخام، ومحركات تنسيق ذكية، وتحليلات قوية جاهزة للعمل.'
        },
        governance: {
          title: 'النسب والحوكمة',
          subtitle: 'فرض السياسات المتكرر',
          desc: 'حوكمة البيانات المتكررة التي تتطور مع عملك، مما يضمن الجودة والامتثال دون إبطائك.'
        },
        lineage: {
          title: 'التحويل',
          subtitle: 'السجل والحفظ',
          desc: 'الحفاظ الكامل على النسب إلى جانب سجل تحويل مركزي. لا تفقد أبداً مسار رحلة بياناتك.'
        },
        dedupe: {
          title: 'إزالة التكرار',
          subtitle: 'مطابقة السجلات الذكية',
          desc: 'محركات إزالة التكرار الآلية التي تحدد وتدمج السجلات المكررة عبر الأنظمة المتباينة.'
        },
        security: {
          title: 'الأمان',
          subtitle: 'أساس منصة Data Bench',
          desc: 'يضمن نهجنا الذي يركز على الأمان أولاً دمج السلامة على مستوى المؤسسات في صميم الأنطولوجيا الدلالية لدينا، مما يوفر بيئة مضادة للرصاص لجميع عمليات البيانات.',
          badge: 'معتمد للمؤسسات',
          features: [
            { title: 'Zero Trust', desc: 'المصادقة القائمة على الهوية لكل طلب' },
            { title: 'التشفير أثناء الراحة', desc: 'حماية AES-256 لجميع الأصول المخزنة' },
            { title: 'التشفير أثناء الانتقال', desc: 'حركة البيانات المؤمنة بـ TLS 1.3' },
            { title: 'RBAC', desc: 'التحكم الدقيق في الوصول القائم على الأدوار' }
          ]
        },
        result: {
          title: 'النتيجة',
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
          { badge: 'الخدمات المصرفية', title: 'إدارة مخاطر ما بعد الاندماج والتكامل', desc: 'تم دمج وفهرسة 122 مليون سجل عملاء عبر خمسة أنظمة مصرفية بدقة 100% في 18 ساعة فقط. من خلال توحيد البيانات المتباينة بعد الاندماج، قضت المنصة على الصوامع وضمنت معالجة مدفوعات خالية من الأخطاء. أدى ذلك إلى تحسين الكفاءة التشغيلية وتوفير أساس شفاف وقابل للتدقيق لإدارة مخاطر المؤسسة.' },
          { badge: 'الإعلام', title: 'النمذجة الدلالية وأتمتة الإيرادات', desc: 'تم تنفيذ نموذج دلالي مركزي لأتمتة حسابات صافي الإيرادات المعقدة، ليحل محل سير العمل اليدوي في جداول البيانات. نجحت المنصة في ترميز هياكل الرسوم المعقدة مع الكشف عن أخطاء البيانات الحرجة التي لم يتم اكتشافها سابقاً في العمليات القديمة. أدى ذلك إلى إنشاء أساس قابل للتطوير والتدقيق قضى على غموض الحسابات وضمن توافقاً بنسبة 100% مع مقاييس الإنتاج.' },
          { badge: 'الملكية الخاصة', title: 'تحليلات موحدة لعدة أنظمة تخطيط موارد المؤسسات (ERP)', desc: 'تم تنفيذ طبقة دلالية مركزية لتوفير تقارير موحدة عبر ثلاثة أنظمة مستقلة لتخطيط موارد المؤسسات (ERP) ذات هياكل بيانات متباينة. قامت المنصة بتوحيد المصطلحات والمنطق غير المتسق، مما أدى إلى تقليل تجميع البيانات اليدوي والمعقد في مصدر واحد للحقيقة. أدى ذلك إلى إنشاء مؤسسة تحليلات مشتركة قللت بشكل كبير من أوقات إعداد التقارير مع السماح لكل علامة تجارية بالاحتفاظ باستقلالها التشغيلي الكامل.' },
          { badge: 'التصنيع', title: 'أتمتة هجرة نظام تخطيط موارد المؤسسات (ERP) والتنسيق', desc: 'تنفيذ رحلة بيانات مؤتمتة لترحيل مجموعات البيانات القديمة إلى منصة Infor M3 مع حل السجلات المكررة إلى "سجلات ذهبية" تم التحقق منها. قامت المنصة بدمج أنظمة مصدر متعددة في رسم بياني معرفي، مما أدى إلى القضاء على أخطاء الهجرة وتفعيل تقارير الإدارة على مستوى المؤسسة قبل التشغيل النهائي. ضمنت هذه العملية انتقالاً خالياً من المخاطر وحافظت على الرؤية التشغيلية طوال عملية الهجرة.' },
          { badge: 'الزراعة', title: 'الامتثال والاستيعاب المؤتمت', desc: 'أتمتة قواعد الامتثال عند الاستيعاب, مما منع حدوث خلل وقلل المراجعة اليدوية بنسبة 85%. ضمن محرك التحقق دخول البيانات عالية الجودة فقط إلى خط المعالجة التحليلي، مما أدى إلى تحسين الدقة وسرعة المعالجة بشكل كبير.' },
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
