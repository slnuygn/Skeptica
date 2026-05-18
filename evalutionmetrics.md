If a web application were designed to analyze an uploaded scientific article to determine its conclusion, significance, and relevance, it would need to evaluate two distinct categories of data: the intrinsic methodological metrics (parsed directly from the text of the paper) and extrinsic article-level bibliometrics (queried from academic databases).

According to the research, the application should specifically utilize the following metrics:

### 1. Intrinsic Methodological Metrics (Assessing Validity and Robustness)

To determine if the conclusions are trustworthy and practically significant, the app would need to parse the text for:

- **Study Design and Evidence Tier:** The app would classify the study type (e.g., observational, Randomized Controlled Trial (RCT), or meta-analysis) to establish its place in the hierarchy of evidence.

- **Biological Model:** It would identify if the study is _in vitro_ (cells), _in vivo_ (animals), or clinical (humans) to immediately filter how translatable the findings are to human health.
- **Sample Size ($N$) and Effect Size:** The app would extract the $N$ to gauge statistical power. Crucially, it would highlight the Effect Size rather than just the $p$-value to determine if the finding has real-world, practical significance rather than just being a mathematical artifact of a massive sample size.
- **Reporting Guideline Adherence:** The application could cross-reference the text against standard quality checklists like CONSORT (for RCTs), STROBE (for observational studies), PRISMA (for systematic reviews), or ARRIVE (for animal studies) to ensure the methodology is transparent and robust.

- **Preregistration Status:** The app would check if the study was preregistered (e.g., via the Open Science Framework) or published as a "Registered Report," which indicates a much lower risk of questionable research practices like $p$-hacking or outcome switching.

### 2. Extrinsic Article-Level Metrics (Assessing Impact and Reach)

To evaluate the paper's historical and societal relevance within the broader scientific community, the app would query external databases for Article-Level Metrics (ALMs).

- **Relative Citation Ratio (RCR):** Developed by the NIH, this is a highly sophisticated metric the app could use to field-normalize citations. Instead of using rigid subject categories, the RCR dynamically benchmarks the article against an expected citation rate generated purely from its own unique co-citation network.

- **Field-Weighted Citation Impact (FWCI) or Category Normalized Citation Impact (CNCI):** These metrics would show how the article compares to a global baseline. A score of 1.0 means it performs exactly at the world average for papers of the same age, subject field, and document type, while a score of 2.0 means it has double the expected impact.

- **Altmetric Attention Score:** To measure immediate societal relevance, this metric tracks the paper's digital footprint across non-traditional platforms, including news outlets, policy documents, patent registrations, and social media.

- **Raw Usage Data:** Tracking immediate engagement through the number of times the specific paper has been viewed, downloaded, or saved to reference managers like Mendeley.

### What the Application Should Explicitly Exclude

The web application should **not** use the Journal Impact Factor (JIF) to assess the uploaded article. Because citation distributions within journals are highly skewed, utilizing a journal-level metric to infer the quality, significance, or citation performance of an individual paper is mathematically invalid and strongly discouraged by the San Francisco Declaration on Research Assessment (DORA).
