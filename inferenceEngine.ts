export type Interest =
  | "technology" | "science" | "arts" | "business" | "healthcare"
  | "social_work" | "law" | "mathematics" | "literature" | "environment"
  | "music" | "sports";

export type Skill =
  | "programming" | "analytical" | "communication" | "leadership"
  | "creativity" | "problem_solving" | "research" | "empathy"
  | "organization" | "mathematics" | "writing" | "technical";

export type AcademicLevel = "excellent" | "good" | "average" | "below_average";

export type WorkStyle =
  | "teamwork" | "independent" | "helping_people" | "research"
  | "creative_work" | "management";

export type CareerGoal =
  | "high_income" | "social_impact" | "work_life_balance"
  | "innovation" | "job_security" | "creative_freedom";

export interface UserProfile {
  interests: Interest[];
  skills: Skill[];
  academicLevel: AcademicLevel;
  workStyles: WorkStyle[];
  careerGoals: CareerGoal[];
}

export interface CareerRecommendation {
  career: string;
  category: string;
  confidence: number; // 0–100
  matchedRules: string[];
  description: string;
  avgSalary: string;
  growthOutlook: string;
  requiredEducation: string;
  icon: string;
  color: string;
}

export interface KnowledgeRule {
  id: string;
  career: string;
  condition: string;
  weight: number;
  description: string;
}

// ─── Knowledge Base ──────────────────────────────────────────────────────────

export const KNOWLEDGE_RULES: KnowledgeRule[] = [
  // Software Engineer
  { id: "R01", career: "Software Engineer", weight: 20, condition: "interest: technology", description: "User is interested in technology" },
  { id: "R02", career: "Software Engineer", weight: 25, condition: "skill: programming", description: "User has programming skills" },
  { id: "R03", career: "Software Engineer", weight: 15, condition: "skill: problem_solving", description: "User excels at problem solving" },
  { id: "R04", career: "Software Engineer", weight: 10, condition: "interest: mathematics", description: "User is interested in mathematics" },
  { id: "R05", career: "Software Engineer", weight: 10, condition: "workStyle: independent", description: "User prefers working independently" },
  { id: "R06", career: "Software Engineer", weight: 10, condition: "goal: high_income", description: "User values high income" },
  { id: "R07", career: "Software Engineer", weight: 10, condition: "academic: excellent OR good", description: "Strong academic background" },

  // Data Scientist
  { id: "R08", career: "Data Scientist", weight: 20, condition: "skill: analytical", description: "Strong analytical thinking skills" },
  { id: "R09", career: "Data Scientist", weight: 20, condition: "skill: mathematics", description: "User has strong math skills" },
  { id: "R10", career: "Data Scientist", weight: 15, condition: "interest: mathematics", description: "Interest in mathematics" },
  { id: "R11", career: "Data Scientist", weight: 15, condition: "skill: programming", description: "Programming skills for data analysis" },
  { id: "R12", career: "Data Scientist", weight: 10, condition: "skill: research", description: "Research orientation" },
  { id: "R13", career: "Data Scientist", weight: 10, condition: "goal: innovation", description: "Values innovation" },
  { id: "R14", career: "Data Scientist", weight: 10, condition: "workStyle: research", description: "Prefers research-based work" },

  // Doctor
  { id: "R15", career: "Doctor", weight: 25, condition: "interest: healthcare", description: "Strong interest in healthcare" },
  { id: "R16", career: "Doctor", weight: 20, condition: "interest: science", description: "Interest in science" },
  { id: "R17", career: "Doctor", weight: 15, condition: "skill: research", description: "Research and analytical skills" },
  { id: "R18", career: "Doctor", weight: 15, condition: "skill: empathy", description: "Empathy for patients" },
  { id: "R19", career: "Doctor", weight: 10, condition: "academic: excellent", description: "Excellent academic performance required" },
  { id: "R20", career: "Doctor", weight: 10, condition: "goal: social_impact", description: "Desire for social impact" },
  { id: "R21", career: "Doctor", weight: 5, condition: "workStyle: helping_people", description: "Motivated by helping people" },

  // Teacher
  { id: "R22", career: "Teacher", weight: 25, condition: "skill: communication", description: "Strong communication skills" },
  { id: "R23", career: "Teacher", weight: 20, condition: "workStyle: helping_people", description: "Enjoys helping people" },
  { id: "R24", career: "Teacher", weight: 15, condition: "goal: social_impact", description: "Values social impact" },
  { id: "R25", career: "Teacher", weight: 15, condition: "skill: leadership", description: "Leadership in the classroom" },
  { id: "R26", career: "Teacher", weight: 10, condition: "goal: work_life_balance", description: "Values work-life balance" },
  { id: "R27", career: "Teacher", weight: 10, condition: "goal: job_security", description: "Values job security" },
  { id: "R28", career: "Teacher", weight: 5, condition: "interest: literature OR arts", description: "Broad subject interest" },

  // Entrepreneur
  { id: "R29", career: "Entrepreneur", weight: 25, condition: "skill: leadership", description: "Strong leadership skills" },
  { id: "R30", career: "Entrepreneur", weight: 20, condition: "interest: business", description: "Interest in business" },
  { id: "R31", career: "Entrepreneur", weight: 15, condition: "skill: creativity", description: "Creative thinking" },
  { id: "R32", career: "Entrepreneur", weight: 15, condition: "goal: innovation", description: "Driven by innovation" },
  { id: "R33", career: "Entrepreneur", weight: 10, condition: "skill: problem_solving", description: "Problem-solving mindset" },
  { id: "R34", career: "Entrepreneur", weight: 10, condition: "goal: high_income", description: "Income ambition" },
  { id: "R35", career: "Entrepreneur", weight: 5, condition: "workStyle: management", description: "Enjoys management" },

  // Lawyer
  { id: "R36", career: "Lawyer", weight: 25, condition: "interest: law", description: "Interest in law and justice" },
  { id: "R37", career: "Lawyer", weight: 20, condition: "skill: communication", description: "Strong communication and argumentation" },
  { id: "R38", career: "Lawyer", weight: 15, condition: "skill: analytical", description: "Analytical reasoning for case building" },
  { id: "R39", career: "Lawyer", weight: 15, condition: "skill: writing", description: "Writing ability for legal documents" },
  { id: "R40", career: "Lawyer", weight: 10, condition: "goal: high_income", description: "High-income potential" },
  { id: "R41", career: "Lawyer", weight: 10, condition: "academic: excellent OR good", description: "Strong academic record" },
  { id: "R42", career: "Lawyer", weight: 5, condition: "goal: social_impact", description: "Desire for justice and social impact" },

  // Graphic Designer / UX Designer
  { id: "R43", career: "UX/Graphic Designer", weight: 30, condition: "skill: creativity", description: "High creativity" },
  { id: "R44", career: "UX/Graphic Designer", weight: 20, condition: "interest: arts", description: "Interest in visual arts" },
  { id: "R45", career: "UX/Graphic Designer", weight: 15, condition: "goal: creative_freedom", description: "Values creative freedom" },
  { id: "R46", career: "UX/Graphic Designer", weight: 15, condition: "interest: technology", description: "Tech-savvy designer" },
  { id: "R47", career: "UX/Graphic Designer", weight: 10, condition: "workStyle: independent", description: "Prefers independent creative work" },
  { id: "R48", career: "UX/Graphic Designer", weight: 10, condition: "workStyle: creative_work", description: "Prefers creative work style" },

  // Psychologist
  { id: "R49", career: "Psychologist", weight: 25, condition: "skill: empathy", description: "High empathy and emotional intelligence" },
  { id: "R50", career: "Psychologist", weight: 20, condition: "interest: social_work", description: "Interest in helping others" },
  { id: "R51", career: "Psychologist", weight: 15, condition: "skill: communication", description: "Listening and communication" },
  { id: "R52", career: "Psychologist", weight: 15, condition: "skill: research", description: "Research into human behavior" },
  { id: "R53", career: "Psychologist", weight: 10, condition: "goal: social_impact", description: "Desire to improve lives" },
  { id: "R54", career: "Psychologist", weight: 10, condition: "interest: science", description: "Scientific basis of psychology" },
  { id: "R55", career: "Psychologist", weight: 5, condition: "workStyle: helping_people", description: "Helping people is central" },

  // Civil / Mechanical Engineer
  { id: "R56", career: "Civil/Mechanical Engineer", weight: 25, condition: "skill: mathematics", description: "Strong mathematics foundation" },
  { id: "R57", career: "Civil/Mechanical Engineer", weight: 20, condition: "interest: science", description: "Scientific interest" },
  { id: "R58", career: "Civil/Mechanical Engineer", weight: 15, condition: "skill: technical", description: "Technical and hands-on skills" },
  { id: "R59", career: "Civil/Mechanical Engineer", weight: 15, condition: "skill: problem_solving", description: "Problem-solving for design challenges" },
  { id: "R60", career: "Civil/Mechanical Engineer", weight: 10, condition: "academic: excellent OR good", description: "Strong academics needed" },
  { id: "R61", career: "Civil/Mechanical Engineer", weight: 10, condition: "workStyle: teamwork", description: "Team-based project work" },
  { id: "R62", career: "Civil/Mechanical Engineer", weight: 5, condition: "goal: job_security", description: "Stable career outlook" },

  // Journalist / Writer
  { id: "R63", career: "Journalist / Writer", weight: 30, condition: "skill: writing", description: "Exceptional writing ability" },
  { id: "R64", career: "Journalist / Writer", weight: 20, condition: "interest: literature", description: "Love of language and literature" },
  { id: "R65", career: "Journalist / Writer", weight: 15, condition: "skill: communication", description: "Communicating stories effectively" },
  { id: "R66", career: "Journalist / Writer", weight: 15, condition: "goal: creative_freedom", description: "Values creative freedom" },
  { id: "R67", career: "Journalist / Writer", weight: 10, condition: "skill: research", description: "Research for articles and stories" },
  { id: "R68", career: "Journalist / Writer", weight: 10, condition: "interest: social_work", description: "Awareness of social issues" },

  // Environmental Scientist
  { id: "R69", career: "Environmental Scientist", weight: 30, condition: "interest: environment", description: "Passion for environmental issues" },
  { id: "R70", career: "Environmental Scientist", weight: 20, condition: "interest: science", description: "Strong science background" },
  { id: "R71", career: "Environmental Scientist", weight: 15, condition: "skill: research", description: "Research into ecology and sustainability" },
  { id: "R72", career: "Environmental Scientist", weight: 15, condition: "goal: social_impact", description: "Desire to protect the planet" },
  { id: "R73", career: "Environmental Scientist", weight: 10, condition: "skill: analytical", description: "Data analysis of environmental data" },
  { id: "R74", career: "Environmental Scientist", weight: 10, condition: "workStyle: research", description: "Research-oriented work" },

  // Financial Analyst / Accountant
  { id: "R75", career: "Financial Analyst", weight: 25, condition: "interest: business", description: "Business and finance interest" },
  { id: "R76", career: "Financial Analyst", weight: 20, condition: "skill: mathematics", description: "Strong quantitative skills" },
  { id: "R77", career: "Financial Analyst", weight: 15, condition: "skill: analytical", description: "Data-driven financial reasoning" },
  { id: "R78", career: "Financial Analyst", weight: 15, condition: "goal: high_income", description: "High earning potential" },
  { id: "R79", career: "Financial Analyst", weight: 10, condition: "skill: organization", description: "Detail-oriented and organized" },
  { id: "R80", career: "Financial Analyst", weight: 10, condition: "goal: job_security", description: "Stable, in-demand career" },
  { id: "R81", career: "Financial Analyst", weight: 5, condition: "workStyle: independent", description: "Focused, individual analysis" },
];

const CAREER_META: Record<string, Omit<CareerRecommendation, "career" | "confidence" | "matchedRules">> = {
  "Software Engineer": {
    category: "Technology",
    description: "Design, develop, and maintain software systems and applications used across every industry.",
    avgSalary: "$95,000 – $160,000",
    growthOutlook: "25% (Much faster than average)",
    requiredEducation: "B.Sc. Computer Science / Software Engineering",
    icon: "💻",
    color: "#1a3a5c",
  },
  "Data Scientist": {
    category: "Technology / Analytics",
    description: "Extract actionable insights from large datasets using statistics, machine learning, and programming.",
    avgSalary: "$100,000 – $170,000",
    growthOutlook: "36% (Exceptional growth)",
    requiredEducation: "B.Sc./M.Sc. Statistics, Mathematics, or CS",
    icon: "📊",
    color: "#0ea5a0",
  },
  "Doctor": {
    category: "Healthcare",
    description: "Diagnose and treat illnesses, injuries, and medical conditions to improve patient health and wellbeing.",
    avgSalary: "$200,000 – $350,000",
    growthOutlook: "3% (Stable demand)",
    requiredEducation: "MBBS / MD (Medical Degree)",
    icon: "🩺",
    color: "#059669",
  },
  "Teacher": {
    category: "Education",
    description: "Educate and inspire the next generation by delivering knowledge and fostering intellectual growth.",
    avgSalary: "$45,000 – $80,000",
    growthOutlook: "5% (Steady demand)",
    requiredEducation: "B.Ed. / Subject-specific Degree",
    icon: "📚",
    color: "#d97706",
  },
  "Entrepreneur": {
    category: "Business",
    description: "Build and lead your own business ventures, creating products or services that solve real-world problems.",
    avgSalary: "Highly variable ($50k–$1M+)",
    growthOutlook: "High risk, high reward",
    requiredEducation: "Any field; MBA or relevant domain expertise",
    icon: "🚀",
    color: "#7c3aed",
  },
  "Lawyer": {
    category: "Legal",
    description: "Represent clients in legal matters, draft documents, and uphold justice through deep knowledge of law.",
    avgSalary: "$80,000 – $200,000",
    growthOutlook: "8% (Faster than average)",
    requiredEducation: "LLB / JD (Law Degree)",
    icon: "⚖️",
    color: "#b45309",
  },
  "UX/Graphic Designer": {
    category: "Creative / Design",
    description: "Create visually compelling interfaces and experiences that communicate clearly and delight users.",
    avgSalary: "$60,000 – $120,000",
    growthOutlook: "16% (Fast growth in digital)",
    requiredEducation: "B.F.A. / B.Des. / Self-taught with portfolio",
    icon: "🎨",
    color: "#db2777",
  },
  "Psychologist": {
    category: "Healthcare / Social",
    description: "Study and apply understanding of human behavior to help individuals improve mental health and wellbeing.",
    avgSalary: "$70,000 – $130,000",
    growthOutlook: "14% (Strong growth)",
    requiredEducation: "M.Sc. / Ph.D. Psychology",
    icon: "🧠",
    color: "#0891b2",
  },
  "Civil/Mechanical Engineer": {
    category: "Engineering",
    description: "Design, construct, and maintain physical infrastructure or mechanical systems that power modern civilization.",
    avgSalary: "$75,000 – $130,000",
    growthOutlook: "7% (Stable demand)",
    requiredEducation: "B.Eng. Civil or Mechanical Engineering",
    icon: "🏗️",
    color: "#374151",
  },
  "Journalist / Writer": {
    category: "Media / Communication",
    description: "Research, report, and communicate stories that inform, educate, and influence public opinion.",
    avgSalary: "$40,000 – $90,000",
    growthOutlook: "Shifting (Digital media growth)",
    requiredEducation: "B.A. Journalism / English / Communications",
    icon: "✍️",
    color: "#6d28d9",
  },
  "Environmental Scientist": {
    category: "Science / Environment",
    description: "Analyze environmental data and develop strategies to address pollution, climate change, and conservation.",
    avgSalary: "$55,000 – $100,000",
    growthOutlook: "11% (Above average)",
    requiredEducation: "B.Sc. Environmental Science / Biology",
    icon: "🌿",
    color: "#16a34a",
  },
  "Financial Analyst": {
    category: "Finance / Business",
    description: "Evaluate investment opportunities, analyze financial data, and advise organizations on financial decisions.",
    avgSalary: "$70,000 – $140,000",
    growthOutlook: "9% (Faster than average)",
    requiredEducation: "B.Sc. Finance / Accounting / Economics",
    icon: "💰",
    color: "#ca8a04",
  },
};

// ─── Inference Engine ─────────────────────────────────────────────────────────

function matchCondition(condition: string, profile: UserProfile): boolean {
  const [type, value] = condition.split(": ");
  if (type === "interest") {
    const values = value.split(" OR ");
    return values.some((v) => profile.interests.includes(v.trim() as Interest));
  }
  if (type === "skill") {
    const values = value.split(" OR ");
    return values.some((v) => profile.skills.includes(v.trim() as Skill));
  }
  if (type === "workStyle") {
    const values = value.split(" OR ");
    return values.some((v) => profile.workStyles.includes(v.trim() as WorkStyle));
  }
  if (type === "goal") {
    const values = value.split(" OR ");
    return values.some((v) => profile.careerGoals.includes(v.trim() as CareerGoal));
  }
  if (type === "academic") {
    const levels = value.split(" OR ").map((v) => v.trim());
    return levels.includes(profile.academicLevel);
  }
  return false;
}

export function runInferenceEngine(profile: UserProfile): CareerRecommendation[] {
  const careerScores: Record<string, { score: number; maxScore: number; matchedRules: string[] }> = {};

  // Initialize all careers
  for (const rule of KNOWLEDGE_RULES) {
    if (!careerScores[rule.career]) {
      const totalWeight = KNOWLEDGE_RULES.filter((r) => r.career === rule.career).reduce((s, r) => s + r.weight, 0);
      careerScores[rule.career] = { score: 0, maxScore: totalWeight, matchedRules: [] };
    }
  }

  // Fire matching rules
  for (const rule of KNOWLEDGE_RULES) {
    if (matchCondition(rule.condition, profile)) {
      careerScores[rule.career].score += rule.weight;
      careerScores[rule.career].matchedRules.push(rule.description);
    }
  }

  // Build recommendations, apply academic multiplier
  const academicMultiplier: Record<AcademicLevel, number> = {
    excellent: 1.0,
    good: 0.92,
    average: 0.82,
    below_average: 0.70,
  };

  const results: CareerRecommendation[] = Object.entries(careerScores)
    .map(([career, { score, maxScore, matchedRules }]) => {
      const rawConfidence = maxScore > 0 ? (score / maxScore) * 100 : 0;
      const confidence = Math.min(100, Math.round(rawConfidence * academicMultiplier[profile.academicLevel]));
      const meta = CAREER_META[career];
      return {
        career,
        confidence,
        matchedRules,
        ...meta,
      };
    })
    .filter((r) => r.confidence > 0)
    .sort((a, b) => b.confidence - a.confidence);

  return results;
}
