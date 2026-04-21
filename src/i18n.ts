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
        subheading: 'Unleash the power of Semantic Ontology. Built for speed, simplicity, flexibility, and iterative growth.',
        bestUseCase: {
          badge: 'Best Use Case',
          quote: 'Facing the regulatory pressure of IFRS compliance, a leading Caribbean financial and insurance group successfully transformed a fragmented, manual reporting process into a unified data environment.',
          description: 'By deploying Data Bench, the organization migrated from legacy spreadsheet workflows to a fully automated, centralized data model in just three weeks.',
          cta: 'Read Full Story'
        }
      },
      platform: {
        label: 'PLATFORM',
        title: 'The Intelligent Data Hub',
        description: 'A comprehensive suite designed to seamlessly ingest, harmonize, and analyze your most critical assets.',
        ingest: {
          title: 'Ingest, Harmonize & Analyze',
          subtitle: 'Landing zones & real-time processing',
          desc: 'Robust landing zones to capture raw data, intelligent harmonizing engines, and powerful analytics ready for action.'
        },
        governance: {
          title: 'Governance',
          subtitle: 'Iterative policy enforcement',
          desc: 'Iterative data governance that evolves with your business, ensuring quality and compliance without slowing you down.'
        },
        lineage: {
          title: 'Lineage and Transformation',
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
            'Security First Architecture',
            'Lineage Preservation',
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
          { badge: 'Banking', title: 'Data Governance & Master Data', desc: 'Consolidated disparate legacy sources into a unified, governed data layer that resolved duplication at the source. This produced a reliable master dataset that eliminated migration risk and accelerated operational readiness for the organization\'s new environment.' },
          { badge: 'Insurance', title: 'Legacy Transformation & Compliance', desc: 'Transforming legacy policy data into a governed, accessible layer that enabled the retirement of multiple high-cost databases. The platform maintained 100% regulatory compliance while providing instant retrieval of over 20 years of historical records for audit purposes.' },
          { badge: 'Manufacturing', title: 'Real-Time Portfolio <br /> Analytics', desc: 'Integrated sixty disparate market feeds and internal ledgers into a single dashboard for multi-asset portfolios. This shift reduced reporting times from days to real-time, providing fund managers with instant exposure analysis and actionable risk metrics.' },
          { badge: 'Finance', title: 'Infrastructure <br /> Migration', desc: 'Facilitated the migration of massive historical datasets with zero downtime or loss of data lineage during a major infrastructure overhaul. The platform mapped complex relational dependencies in real-time, ensuring every transaction remained traceable and auditable.' },
          { badge: 'M&A', title: 'Automated Compliance & Ingestion', desc: 'Automated complex compliance rules at ingestion, preventing downstream anomalies and reducing manual review requirements by 85%. This validation engine ensured only high-quality, pre-cleared data entered the pipeline, improving both accuracy and processing speed.' },
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
        subheading: 'Libere el poder de la ontología semántica. Diseñado para ofrecer velocidad, sencillez, flexibilidad y crecimiento iterativo.',
        bestUseCase: {
          badge: 'Mejor Caso de Uso',
          quote: 'Enfrentando la presión regulatoria del cumplimiento de la NIIF, un grupo financiero y de seguros líder en el Caribe transformó con éxito un proceso de informes manual y fragmentado en un entorno de datos unificado.',
          description: 'Al implementar Data Bench, la organización migró de flujos de trabajo de hojas de cálculo heredadas a un modelo de datos centralizado y totalmente automatizado en solo tres semanas.',
          cta: 'Leer Historia Completa'
        }
      },
      platform: {
        label: 'PLATAFORMA',
        title: 'El Centro de Datos Inteligente',
        description: 'Una suite integral diseñada para ingerir, armonizar y analizar sin problemas sus activos más críticos.',
        ingest: {
          title: 'Ingesta, Armonización, Análisis',
          subtitle: 'Zonas de aterrizaje y procesamiento en tiempo real',
          desc: 'Zonas de aterrizaje robustas para capturar datos sin procesar, motores de armonización inteligentes y análisis potentes listos para la acción.'
        },
        governance: {
          title: 'Gobernanza',
          subtitle: 'Cumplimiento de políticas iterativas',
          desc: 'Gobernanza de datos iterativa que evoluciona con su negocio, garantizando la calidad y el cumplimiento sin frenarlo.'
        },
        lineage: {
          title: 'Linaje y Transformación',
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
            'Arquitectura de Seguridad Primero',
            'Preservación de Linaje',
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
          { badge: 'Banca', title: 'Gobernanza de Datos y Datos Maestros', desc: 'Consolidó fuentes heredadas en una capa de datos gobernada que resolvió la duplicación en la fuente. Esto produjo un conjunto de datos maestro confiable que eliminó el riesgo de migración y aceleró la preparación operativa para el nuevo entorno de la organización.' },
          { badge: 'Seguros', title: 'Transformación de Legado y Cumplimiento', desc: 'Transformó los datos de pólizas heredadas en una capa gobernada y accesible que permitió el retiro de múltiples bases de datos de alto costo. La plataforma mantuvo el cumplimiento regulatorio al 100% con recuperación instantánea de registros históricos para fines de auditoría.' },
          { badge: 'Manufactura', title: 'Analítica de Cartera <br /> en Tiempo Real', desc: 'Integró sesenta canales de mercado y libros internos en un único tablero para carteras de múltiples activos. Este cambio redujo los tiempos de informes de días a tiempo real, brindando a los gestores análisis de exposición y métricas de riesgo accionables e instantáneas.' },
          { badge: 'Finanzas', title: 'Migración de <br /> Infraestructura', desc: 'Facilitó la migración de conjuntos de datos históricos masivos sin tiempo de inactividad ni pérdida de linaje durante una revisión importante. La plataforma mapeó dependencias relacionales en tiempo real, asegurando que cada transacción permaneciera rastreable y auditable.' },
          { badge: 'M&A', title: 'Cumplimiento e Ingesta Automatizada', desc: 'Automatizó reglas de cumplimiento en la ingesta, evitando anomalías y reduciendo la revisión manual en un 85%. Este motor de validación aseguró que solo ingresaran datos de alta calidad en el flujo analítico, mejorando significativamente la precisión y la velocidad de procesamiento.' },
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
        subheading: 'أطلق العنان لقوة الأنطولوجيا الدلالية. صُممت من أجل السرعة والبساطة والمرونة والنمو المتكرر.',
        bestUseCase: {
          badge: 'أفضل حالة استخدام',
          quote: 'في مواجهة الضغوط التنظيمية للامتثال للمعايير الدولية لإعداد التقارير المالية (IFRS)، نجحت مجموعة مالية وتأمينية رائدة في منطقة البحر الكاريبي في تحويل عملية إعداد تقارير يدوية ومجزأة إلى بيئة بيانات موحدة.',
          description: 'من خلال نشر Data Bench, انتقلت المؤسسة من سير عمل جداول البيانات القديمة إلى نموذج بيانات مركزي ومؤتمت بالكامل في غضون ثلاثة أسابيع فقط.',
          cta: 'اقرأ القصة كاملة'
        }
      },
      platform: {
        label: 'المنصة',
        title: 'مركز البيانات الذكي',
        description: 'مجموعة شاملة مصممة لاستيعاب أصولك الأكثر أهمية وتنسيقها وتحليلها بسلاسة.',
        ingest: {
          title: 'الاستيعاب والتنسيق والتحليل',
          subtitle: 'مناطق الهبوط والمعالجة في الوقت الفعلي',
          desc: 'مناطق هبوط قوية لالتقاط البيانات الخام، ومحركات تنسيق ذكية، وتحليلات قوية جاهزة للعمل.'
        },
        governance: {
          title: 'الحوكمة',
          subtitle: 'فرض السياسات المتكرر',
          desc: 'حوكمة البيانات المتكررة التي تتطور مع عملك، مما يضمن الجودة والامتثال دون إبطائك.'
        },
        lineage: {
          title: 'النسب والتحويل',
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
            'بنية الأمان أولاً',
            'الحفاظ على النسب',
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
          { badge: 'الخدمات المصرفية', title: 'حوكمة البيانات والبيانات الأساسية', desc: 'قامت بدمج مصادر قديمة في طبقة بيانات محكومة حلت مشكلة التكرار عند المصدر. أنتج هذا مجموعة بيانات أساسية موثوقة قضت على مخاطر الهجرة وسرعت الجاهزية التشغيلية للبيئة الجديدة للمؤسسة.' },
          { badge: 'التأمين', title: 'تحويل الأنظمة القديمة والامتثال', desc: 'تحويل بيانات البوليصات القديمة إلى طبقة خاضعة للحوكمة سمحت بإيقاف تشغيل قواعد البيانات عالية التكلفة. حافظت المنصة على الامتثال التنظيمي بنسبة 100% مع توفير استرجاع فوري للسجلات التاريخية لأغراض التدقيق.' },
          { badge: 'التصنيع', title: 'تحليلات المحفظة <br /> في الوقت الفعلي', desc: 'قامت بدمج ستين مصدر بيانات سوق ودفاتر حسابات داخلية في لوحة معلومات واحدة للمحافظ. قلل هذا أوقات إعداد التقارير من أيام إلى وقت فعلي، مما وفر للمديرين تحليلاً فورياً ومقاييس مخاطر قابلة للتنفيذ.' },
          { badge: 'المالية', title: 'هجرة البنية <br /> التحتية', desc: 'سهلت هجرة مجموعات البيانات التاريخية الضخمة دون توقف أو فقدان لنِسب البيانات خلال عملية إصلاح شاملة. قامت برسم خرائط للتبعيات العلائقية في الوقت الفعلي، مما يضمن بقاء كل معاملة قابلة للتتبع والتدقيق.' },
          { badge: 'الاندماج والاستحواذ', title: 'الامتثال والاستيعاب المؤتمت', desc: 'أتمتة قواعد الامتثال عند الاستيعاب, مما منع حدوث خلل وقلل المراجعة اليدوية بنسبة 85%. ضمن محرك التحقق دخول البيانات عالية الجودة فقط إلى خط المعالجة التحليلي، مما أدى إلى تحسين الدقة وسرعة المعالجة بشكل كبير.' },
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
