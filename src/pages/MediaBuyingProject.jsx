import mediaBuyerLogo from "../assets/media_buyer_logo.jpg";
import ProjectDetailLayout from "../components/ProjectDetailLayout";

const kpis = [
  { label: "Total Spend", value: "$1.6M" },
  { label: "Revenue", value: "$1.37M" },
  { label: "Overall ROAS", value: "0.86" },
  { label: "Target ROAS", value: "1.20" },
];

const platformRows = [
  { platform: "Facebook", spend: "$540K", revenue: "$456K", ctr: "2.8%", cpc: "$1.34", cvr: "4.1%", roas: "0.84" },
  { platform: "Google", spend: "$610K", revenue: "$520K", ctr: "3.1%", cpc: "$1.15", cvr: "5.2%", roas: "0.85" },
  { platform: "TikTok", spend: "$450K", revenue: "$394K", ctr: "4.6%", cpc: "$0.96", cvr: "3.3%", roas: "0.88" },
];

const findings = [
  "Overall ROAS is below target across the portfolio.",
  "Some campaigns are consistently underperforming and draining budget.",
  "High CPC is reducing efficiency in a subset of placements.",
  "CTR and CVR can help identify inefficient campaigns earlier.",
  "Week-over-week ROAS trends should be monitored closely.",
];

const recommendations = [
  "Reallocate budget toward the highest-performing channels.",
  "Pause or optimize campaigns with weak ROAS and elevated CPC.",
  "Test new creative variations and audience segments.",
  "Monitor conversion quality and budget pacing before scaling.",
  "Create a daily ROAS check for rapid campaign adjustments.",
];

const stack = ["Power BI", "Microsoft Excel", "Python", "Pandas", "NumPy", "Scikit-learn", "SQL"];

const analyticalObjective =
  "This project evaluates multichannel marketing performance to identify inefficient spending, understand performance drivers, and develop data-driven recommendations for improving ROAS while supporting 40% revenue growth.";

const businessContext = {
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
};

const dataQuality = {
  objective:
    "Before analyzing campaign performance, the dataset was reviewed for completeness, consistency, accuracy, and unusual values to ensure insights and recommendations were based on reliable information.",
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
    "Identified and handled missing values.",
    "Checked for duplicate records.",
    "Validated date formats and categorical values.",
    "Reviewed unusual values in ad spend, revenue, clicks, impressions, and purchases.",
    "Checked whether zero or null values affected metric calculations.",
    "Documented assumptions made during data preparation.",
  ],
  metricsTable: [
    { metric: "CTR", formula: "Clicks ÷ Impressions × 100", purpose: "Measures ad engagement" },
    { metric: "CPC", formula: "Ad Spend ÷ Clicks", purpose: "Measures cost per click" },
    { metric: "CVR", formula: "Purchases ÷ Clicks × 100", purpose: "Measures conversion efficiency" },
    { metric: "ROAS", formula: "Revenue ÷ Ad Spend", purpose: "Measures advertising return" },
  ],
  documentation:
    "The final analysis documents the data issues identified, the cleaning actions performed, and the assumptions that may influence interpretation of the results.",
};

const methodology = {
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
    "Statistical significance testing was used to determine whether observed differences between platforms or regions represent meaningful performance variation rather than random fluctuations.",
    "The final report documents the statistical tests used, significance levels, assumptions, and interpretation of the results.",
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
};

const chartVisual = (
  <div className="chart-placeholder" aria-label="Campaign performance chart placeholder">
    <div className="chart-bars">
      <span style={{ height: "42%" }} />
      <span style={{ height: "58%" }} />
      <span style={{ height: "72%" }} />
      <span style={{ height: "64%" }} />
      <span style={{ height: "80%" }} />
      <span style={{ height: "70%" }} />
      <span style={{ height: "92%" }} />
    </div>
    <div className="chart-legend">
      <span className="legend-dot purple" /> ROAS
      <span className="legend-dot teal" /> Spend
    </div>
  </div>
);

export default function MediaBuyingProject() {
  return (
    <ProjectDetailLayout
      title="Media Buying Analytics"
      subtitle="Multichannel Campaign Performance & Budget Optimization"
      description="Analyzed a DTC fitness supplements brand spending 
                  $1.6M monthly across Facebook, Google, and TikTok, with an overall ROAS of 0.86 versus the 1.2 target. The project focuses on identifying performance gaps and optimizing ad spend to support 40% revenue growth while maintaining profitability.
"
      image={mediaBuyerLogo}
      kpis={kpis}
      platformRows={platformRows}
      findings={findings}
      recommendations={recommendations}
      stack={stack}
      visual={chartVisual}
      analyticalObjective={analyticalObjective}
      businessContext={businessContext}
      dataQuality={dataQuality}
      methodology={methodology}
    />
  );
}