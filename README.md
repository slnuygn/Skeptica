# Skeptica

Skeptica, **BTK Hackathon 2026** için geliştirilmiş, **Gemini API** entegrasyonu kullanan yenilikçi bir platformdur.

Bu projenin temel amacı, akademik makalelerin ve araştırma sonuçlarının günlük hayata uygulanabilirliğini spesifik metriklerle hesaplamaktır.

## Nasıl Çalışır?

Kullanıcılar sisteme bilimsel bir makale yükler ve Skeptica, Gemini API'nin gücünü kullanarak bu makaleyi analiz eder.

**Örnek Senaryo:**
Bir kullanıcı, _"Bulgarian Split Squat egzersizinde ağırlığın sol elle mi yoksa sağ elle mi tutulmasının daha efektif olduğunu"_ karşılaştıran bir makale yüklediğinde sistem bu makaleyi analiz eder ve varılan temel bilimsel sonucu günlük kullanıma uygun bir şekilde özetler. Örneğin sistem şu çıktıyı sağlar: _"Egzersizin efektifiği açısından sağ veya sol elde ağırlık tutulması arasında anlamlı (significant) bir fark bulunamamıştır."_

Böylece karmaşık araştırmalar ve veriler, herkesin sporda, sağlıkta veya günlük rutinlerinde kolayca uygulayabileceği pratik bilgilere dönüştürülür.

## Teknoloji Yığını (Tech Stack)

Skeptica projesinin arkaplan (backend) mimarisi modern, hızlı ve ölçeklenebilir teknolojiler kullanılarak inşa edilmiştir:

- **Yapay Zeka (AI):** Google Gemini API
- **Framework:** NestJS (Fastify tabanlı)
- **Programlama Dili:** TypeScript
- **Veritabanı / ORM:** PostgreSQL (v16) & Prisma ORM
- **Konteynerizasyon:** Docker & Docker Compose (Multi-stage build yapısıyla optimize edilmiştir)
- **Validasyon:** `class-validator` ve `class-transformer`
- **Test:** Jest (Birim) & Supertest (E2E)

## Yazılım Mimarisi (Architecture)

Proje, sağlam ve ölçeklenebilir olması adına **Domain-Driven Design (DDD)** prensiplerine sadık kalarak tasarlanmıştır:
- Tüm domain ve feature kodları `src/modules/<feature-name>` altında organize edilir.
- **İnce Controller Yapısı:** Controller'lar sadece HTTP yönlendirmelerinden ve durum kodlarından sorumludur. Tüm iş mantığı (business logic) Servis katmanında yer alır.
- Güçlü veri doğrulama için DTO (Data Transfer Object) mimarisi uygulanmaktadır.
- Kesin tiplendirme (Strict typings) kullanılarak uygulamanın öngörülebilirliği artırılmış, `any` tip kullanımından kaçınılmıştır.
