import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectDetailLayout({
  kicker,
  title,
  subtitle,
  description,
  image,
  kpis = [],
  platformRows = [],
  findings = [],
  recommendations = [],
  stack = [],
  visual,
  analyticalObjective = `This project evaluates multichannel marketing performance to
                identify inefficient spending, understand performance drivers,
                and develop data-driven recommendations for improving ROAS
                while supporting revenue growth.`,
  businessContext = {
    paragraphs: [
      "The business is a direct-to-consumer fitness supplements brand running multichannel marketing campaigns across Facebook, Google, and TikTok.",
      "The main objective is to optimize marketing spend, improve advertising efficiency, and support revenue growth while maintaining profitability.",
    ],
    metrics: [
      { label: "Monthly Ad Spend", value: "$1.6M" },
      { label: "Current ROAS", value: "0.86" },
      { label: "Minimum ROAS Target", value: "1.20" },
      { label: "Revenue Growth Goal", value: "40%" },
    ],
    challenges: [
      "Overall ROAS is below the required business target.",
      "Marketing performance varies across platforms, campaigns, creatives, and product categories.",
      "Weekly campaign efficiency has been declining.",
      "Regional performance patterns require further analysis.",
      "The impact of competitive events is not yet fully understood.",
      "Underperforming areas need to be reduced while protecting revenue growth.",
    ],
  },
  dataQuality = {
    objective:
      "Before analyzing campaign performance, the dataset must be reviewed for completeness, consistency, accuracy, and unusual values. This helps ensure that the insights and recommendations are based on reliable information.",
    scope: [
      "Three months of daily marketing performance data",
      "Analysis period: January to March 2024",
      "Platforms: Facebook, Google, and TikTok",
      "Regions: West, South, Northeast, and Midwest",
      "Product categories: Pre-workout, Protein, Weight Loss, and Diet",
      "Creative types: Video, Image, Carousel, Search, and Display",
      "Target audiences: Athletes, Fitness Enthusiasts, and Weight Loss",
    ],
    checks: [
      "Identify and handle missing values.",
      "Check for duplicate records.",
      "Validate date formats and categorical values.",
      "Review unusual values in ad spend, revenue, clicks, impressions, and purchases.",
      "Check whether zero or null values affect metric calculations.",
      "Document assumptions made during data preparation.",
    ],
    metricsTable: [
      { metric: "CTR", formula: "Clicks ÷ Impressions × 100", purpose: "Measures ad engagement" },
      { metric: "CPC", formula: "Ad Spend ÷ Clicks", purpose: "Measures cost per click" },
      { metric: "CVR", formula: "Purchases ÷ Clicks × 100", purpose: "Measures conversion efficiency" },
      { metric: "ROAS", formula: "Revenue ÷ Ad Spend", purpose: "Measures advertising return" },
    ],
    documentation:
      "The final analysis should document the data issues identified, the cleaning actions performed, and the assumptions that may influence the interpretation of the results.",
  },
  methodology = {
    approach: [
      "Understand the business objectives and performance targets.",
      "Inspect and clean the dataset.",
      "Validate the core marketing performance metrics.",
      "Conduct exploratory data analysis.",
      "Compare performance across platforms, regions, creatives, products, and audiences.",
      "Evaluate weekly trends and competitive-event effects.",
      "Translate findings into prioritized recommendations.",
      "Define a measurement plan for tracking improvements.",
    ],
    statistical: [
      "Statistical significance testing can be used to determine whether observed differences between platforms or regions are likely to represent meaningful performance variation rather than random fluctuations.",
      "The final report should document the statistical tests used, significance levels, assumptions, and interpretation of the results.",
    ],
    measurement: [
      "Primary metric: ROAS",
      "Efficiency metrics: CPC, CPM, CTR, and CVR",
      "Business outcomes: Revenue and profitability",
      "Customer value metric: Customer LTV",
      "Monitoring frequency: Weekly and monthly performance reviews",
    ],
    assumptions: [
      "Missing or inconsistent records may affect certain calculations.",
      "Correlation between metrics does not necessarily indicate causation.",
      "Competitive events and seasonality may influence campaign performance.",
      "Budget recommendations should be validated through controlled testing and ongoing monitoring.",
    ],
  },
}) {
  const [activePage, setActivePage] = useState("overview");

  const navigationItems = [
    {
      id: "overview",
      label: "Executive Overview",
    },
    {
      id: "business-context",
      label: "Business Context",
    },
    {
      id: "data-quality",
      label: "Data Quality & Exploration",
    },
    {
      id: "performance",
      label: "Performance Analysis",
    },
    {
      id: "recommendations",
      label: "Strategic Recommendations",
    },
    {
      id: "methodology",
      label: "Methodology",
    },
    {
      id: "tech-stack",
      label: "Technical Stack",
    },
  ];

  const renderPageContent = () => {
    switch (activePage) {
      /* =========================================
         EXECUTIVE OVERVIEW
         ========================================= */

      case "overview":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>

            <section className="project-panel overview-panel">
              <div className="project-hero-image">
                <img src={image} alt={title} />

                <div className="project-hero-copy">
                  <h2>Project Overview</h2>
                  <p>{description}</p>
                </div>
              </div>
            </section>

            {kpis.length > 0 && (
              <section className="project-kpi-grid">
                {kpis.map((item) => (
                  <div key={item.label} className="project-kpi-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </section>
            )}

            <section className="project-panel">
              <h3>Analytical Objective</h3>

              <p>{analyticalObjective}</p>
            </section>
          </div>
        );

      /* =========================================
         BUSINESS CONTEXT
         ========================================= */

      case "business-context":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>Business Context</h1>
              <p>
                Understanding the business objectives, marketing environment,
                and performance challenges that guided the analysis.
              </p>
            </div>

            <section className="project-panel">
              <h3>Business Situation</h3>

              {businessContext.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            {businessContext.metrics.length > 0 && (
              <section className="project-kpi-grid">
                {businessContext.metrics.map((item) => (
                  <div key={item.label} className="project-kpi-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </section>
            )}

            <section className="project-panel">
              <h3>Key Business Challenges</h3>

              <ul className="project-bullets">
                {businessContext.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        );

      /* =========================================
         DATA QUALITY AND EXPLORATION
         ========================================= */

      case "data-quality":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>Data Quality & Exploration</h1>
              <p>
                Assessing data reliability, validating performance metrics,
                and preparing the dataset for analysis.
              </p>
            </div>

            <section className="project-panel">
              <h3>Data Preparation Objective</h3>

              <p>{dataQuality.objective}</p>
            </section>

            <section className="project-panel">
              <h3>Dataset Scope</h3>

              <ul className="project-bullets">
                {dataQuality.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="project-panel">
              <h3>Data Quality Checks</h3>

              <ul className="project-bullets">
                {dataQuality.checks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="project-panel">
              <h3>Performance Metrics Validation</h3>

              <div className="project-table-wrap">
                <table className="project-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Formula</th>
                      <th>Business Purpose</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dataQuality.metricsTable.map((row) => (
                      <tr key={row.metric}>
                        <td>{row.metric}</td>
                        <td>{row.formula}</td>
                        <td>{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="project-panel">
              <h3>Data Quality Documentation</h3>

              <p>{dataQuality.documentation}</p>
            </section>
          </div>
        );

      /* =========================================
         PERFORMANCE ANALYSIS
         ========================================= */

      case "performance":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>Performance Analysis</h1>
              <p>
                Evaluating channel, regional, creative, product, audience,
                and time-based performance to identify optimization
                opportunities.
              </p>
            </div>

            {kpis.length > 0 && (
              <section className="project-kpi-grid">
                {kpis.map((item) => (
                  <div key={item.label} className="project-kpi-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </section>
            )}

            {visual && (
              <section className="project-panel chart-panel">
                <h3>Campaign Performance</h3>
                {visual}
              </section>
            )}

            {platformRows.length > 0 && (
              <section className="project-panel">
                <h3>Platform Performance</h3>

                <div className="project-table-wrap">
                  <table className="project-table">
                    <thead>
                      <tr>
                        <th>Platform</th>
                        <th>Spend</th>
                        <th>Revenue</th>
                        <th>CTR</th>
                        <th>CPC</th>
                        <th>CVR</th>
                        <th>ROAS</th>
                      </tr>
                    </thead>

                    <tbody>
                      {platformRows.map((row) => (
                        <tr key={row.platform}>
                          <td>{row.platform}</td>
                          <td>{row.spend}</td>
                          <td>{row.revenue}</td>
                          <td>{row.ctr}</td>
                          <td>{row.cpc}</td>
                          <td>{row.cvr}</td>
                          <td>{row.roas}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {findings.length > 0 && (
              <section className="project-panel">
                <h3>Key Findings</h3>

                <ul className="project-bullets">
                  {findings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            <section className="project-panel">
              <h3>Analysis Areas</h3>

              <ul className="project-bullets">
                <li>
                  Compare Facebook, Google, and TikTok across key performance
                  metrics.
                </li>
                <li>
                  Identify overperforming and underperforming regions.
                </li>
                <li>
                  Compare creative formats such as video, image, carousel,
                  search, and display.
                </li>
                <li>
                  Analyze product category and target audience performance.
                </li>
                <li>Review week-over-week ROAS trends.</li>
                <li>
                  Assess the effect of competitive events on campaign results.
                </li>
                <li>
                  Evaluate the relationship between ad frequency and conversion
                  rates.
                </li>
              </ul>
            </section>
          </div>
        );

      /* =========================================
         STRATEGIC RECOMMENDATIONS
         ========================================= */

      case "recommendations":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>Strategic Recommendations</h1>
              <p>
                Translating analytical findings into actionable marketing,
                budget allocation, testing, and measurement strategies.
              </p>
            </div>

            <section className="project-panel">
              <h3>Immediate Optimization Opportunities</h3>

              <ul className="project-bullets">
                <li>
                  Identify the lowest-performing campaigns and areas for spend
                  reduction.
                </li>
                <li>
                  Develop a framework for reducing 30% of inefficient spend.
                </li>
                <li>
                  Reallocate budget toward high-performing channels and
                  campaigns.
                </li>
                <li>
                  Recommend bidding adjustments around competitive events.
                </li>
              </ul>
            </section>

            <section className="project-panel">
              <h3>Testing Recommendations</h3>

              <ul className="project-bullets">
                <li>
                  Propose three data-driven A/B tests based on the analysis.
                </li>
                <li>
                  Define a clear hypothesis and experimental design for each
                  test.
                </li>
                <li>
                  Identify success metrics and measurement methods.
                </li>
                <li>
                  Estimate potential impact and define implementation
                  timelines.
                </li>
              </ul>
            </section>

            <section className="project-panel">
              <h3>Long-Term Strategy</h3>

              <ul className="project-bullets">
                <li>
                  Develop a data-driven regional budget allocation strategy.
                </li>
                <li>
                  Create a platform-specific creative strategy.
                </li>
                <li>
                  Prioritize high-value audiences and product categories.
                </li>
                <li>
                  Incorporate seasonality and competitive events into quarterly
                  planning.
                </li>
              </ul>
            </section>

            {recommendations.length > 0 && (
              <section className="project-panel">
                <h3>Project-Specific Recommendations</h3>

                <ul className="project-bullets">
                  {recommendations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        );

      /* =========================================
         METHODOLOGY
         ========================================= */

      case "methodology":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>Methodology</h1>
              <p>
                Documenting the analytical framework, metric definitions,
                statistical methods, and decision-making process.
              </p>
            </div>

            <section className="project-panel">
              <h3>Analytical Approach</h3>

              <ol className="project-bullets">
                {methodology.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            <section className="project-panel">
              <h3>Statistical Analysis</h3>

              {methodology.statistical.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="project-panel">
              <h3>Measurement Framework</h3>

              <ul className="project-bullets">
                {methodology.measurement.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="project-panel">
              <h3>Assumptions and Limitations</h3>

              <ul className="project-bullets">
                {methodology.assumptions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        );

      /* =========================================
         TECHNICAL STACK
         ========================================= */

      case "tech-stack":
        return (
          <div className="dashboard-page">
            <div className="dashboard-page-header">
              <span className="project-page-tag">{kicker}</span>
              <h1>Technical Stack</h1>
              <p>
                Tools and technologies used for data preparation, analysis,
                visualization, and business reporting.
              </p>
            </div>

            <section className="project-panel">
              <h3>Tools and Technologies</h3>

              <div className="project-stack">
                {stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar-content">
          <div className="dashboard-sidebar-heading">
            <h2>{title}</h2>
          </div>

          <nav className="dashboard-navigation">
            <p className="dashboard-navigation-label">Project Menu</p>

            {navigationItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`dashboard-nav-item ${
                  activePage === item.id ? "active" : ""
                }`}
                onClick={() => setActivePage(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="dashboard-sidebar-bottom">
          <Link to="/" className="back-link">
            <span className="back-link-arrow">←</span>
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </aside>

      <main className="dashboard-content">
        <div className="dashboard-content-inner">
          {renderPageContent()}
        </div>
      </main>
    </div>
  );
}