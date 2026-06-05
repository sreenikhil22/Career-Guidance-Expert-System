import { useState } from "react";
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react";

const PYTHON_CODE = `# ============================================================
# Career Guidance Expert System — Python Inference Engine
# Rule-Based Artificial Intelligence
# ============================================================

from dataclasses import dataclass, field
from typing import List, Dict, Tuple
from enum import Enum


# ─── Enumerations ────────────────────────────────────────────

class Interest(str, Enum):
    TECHNOLOGY    = "technology"
    SCIENCE       = "science"
    ARTS          = "arts"
    BUSINESS      = "business"
    HEALTHCARE    = "healthcare"
    SOCIAL_WORK   = "social_work"
    LAW           = "law"
    MATHEMATICS   = "mathematics"
    LITERATURE    = "literature"
    ENVIRONMENT   = "environment"
    MUSIC         = "music"
    SPORTS        = "sports"

class Skill(str, Enum):
    PROGRAMMING    = "programming"
    ANALYTICAL     = "analytical"
    COMMUNICATION  = "communication"
    LEADERSHIP     = "leadership"
    CREATIVITY     = "creativity"
    PROBLEM_SOLVING = "problem_solving"
    RESEARCH       = "research"
    EMPATHY        = "empathy"
    ORGANIZATION   = "organization"
    MATHEMATICS    = "mathematics"
    WRITING        = "writing"
    TECHNICAL      = "technical"

class AcademicLevel(str, Enum):
    EXCELLENT     = "excellent"
    GOOD          = "good"
    AVERAGE       = "average"
    BELOW_AVERAGE = "below_average"


# ─── Data Structures ─────────────────────────────────────────

@dataclass
class UserProfile:
    interests:      List[Interest]
    skills:         List[Skill]
    academic_level: AcademicLevel
    work_styles:    List[str]
    career_goals:   List[str]

@dataclass
class KnowledgeRule:
    rule_id:     str
    career:      str
    condition:   str   # e.g. "interest:technology" or "skill:programming"
    weight:      int   # contribution to confidence score
    description: str

@dataclass
class CareerResult:
    career:        str
    confidence:    int   # 0–100
    matched_rules: List[str] = field(default_factory=list)


# ─── Knowledge Base ──────────────────────────────────────────

KNOWLEDGE_BASE: List[KnowledgeRule] = [
    # Software Engineer
    KnowledgeRule("R01", "Software Engineer", "interest:technology",    20, "Interest in technology"),
    KnowledgeRule("R02", "Software Engineer", "skill:programming",      25, "Programming skills"),
    KnowledgeRule("R03", "Software Engineer", "skill:problem_solving",  15, "Problem-solving ability"),
    KnowledgeRule("R04", "Software Engineer", "interest:mathematics",   10, "Interest in mathematics"),
    KnowledgeRule("R05", "Software Engineer", "workstyle:independent",  10, "Prefers independent work"),
    KnowledgeRule("R06", "Software Engineer", "goal:high_income",       10, "Values high income"),
    KnowledgeRule("R07", "Software Engineer", "academic:excellent|good",10, "Strong academic background"),

    # Data Scientist
    KnowledgeRule("R08", "Data Scientist", "skill:analytical",       20, "Strong analytical thinking"),
    KnowledgeRule("R09", "Data Scientist", "skill:mathematics",      20, "Strong math skills"),
    KnowledgeRule("R10", "Data Scientist", "interest:mathematics",   15, "Interest in mathematics"),
    KnowledgeRule("R11", "Data Scientist", "skill:programming",      15, "Programming for data analysis"),
    KnowledgeRule("R12", "Data Scientist", "skill:research",         10, "Research orientation"),
    KnowledgeRule("R13", "Data Scientist", "goal:innovation",        10, "Values innovation"),
    KnowledgeRule("R14", "Data Scientist", "workstyle:research",     10, "Prefers research work"),

    # Doctor
    KnowledgeRule("R15", "Doctor", "interest:healthcare", 25, "Interest in healthcare"),
    KnowledgeRule("R16", "Doctor", "interest:science",    20, "Interest in science"),
    KnowledgeRule("R17", "Doctor", "skill:research",      15, "Research and analytical skills"),
    KnowledgeRule("R18", "Doctor", "skill:empathy",       15, "Empathy for patients"),
    KnowledgeRule("R19", "Doctor", "academic:excellent",  10, "Excellent academics required"),
    KnowledgeRule("R20", "Doctor", "goal:social_impact",  10, "Desire for social impact"),
    KnowledgeRule("R21", "Doctor", "workstyle:helping",    5, "Motivated by helping people"),

    # Teacher
    KnowledgeRule("R22", "Teacher", "skill:communication",  25, "Strong communication skills"),
    KnowledgeRule("R23", "Teacher", "workstyle:helping",    20, "Enjoys helping people"),
    KnowledgeRule("R24", "Teacher", "goal:social_impact",   15, "Values social impact"),
    KnowledgeRule("R25", "Teacher", "skill:leadership",     15, "Leadership skills"),
    KnowledgeRule("R26", "Teacher", "goal:work_life_balance",10, "Values work-life balance"),
    KnowledgeRule("R27", "Teacher", "goal:job_security",    10, "Values job security"),
    KnowledgeRule("R28", "Teacher", "interest:literature|arts", 5, "Broad subject interest"),

    # Entrepreneur
    KnowledgeRule("R29", "Entrepreneur", "skill:leadership",   25, "Strong leadership"),
    KnowledgeRule("R30", "Entrepreneur", "interest:business",  20, "Business interest"),
    KnowledgeRule("R31", "Entrepreneur", "skill:creativity",   15, "Creative thinking"),
    KnowledgeRule("R32", "Entrepreneur", "goal:innovation",    15, "Driven by innovation"),
    KnowledgeRule("R33", "Entrepreneur", "skill:problem_solving",10, "Problem-solving mindset"),
    KnowledgeRule("R34", "Entrepreneur", "goal:high_income",   10, "Income ambition"),
    KnowledgeRule("R35", "Entrepreneur", "workstyle:management", 5, "Enjoys management"),
]

ACADEMIC_MULTIPLIER: Dict[AcademicLevel, float] = {
    AcademicLevel.EXCELLENT:     1.00,
    AcademicLevel.GOOD:          0.92,
    AcademicLevel.AVERAGE:       0.82,
    AcademicLevel.BELOW_AVERAGE: 0.70,
}


# ─── Inference Engine ─────────────────────────────────────────

class InferenceEngine:
    """
    Forward-chaining rule-based inference engine.

    For each rule in the knowledge base, it checks whether the
    condition matches the user's profile. Matching rules
    contribute their weight to the career's total score.
    A confidence percentage is then calculated as:

        confidence = (matched_weight / max_weight) * multiplier * 100
    """

    def __init__(self, rules: List[KnowledgeRule]):
        self.rules = rules

    def _match_condition(self, condition: str, profile: UserProfile) -> bool:
        """Evaluate a single rule condition against the user profile."""
        ctype, value = condition.split(":", 1)
        options = value.split("|")

        if ctype == "interest":
            return any(o in [i.value for i in profile.interests] for o in options)
        if ctype == "skill":
            return any(o in [s.value for s in profile.skills] for o in options)
        if ctype == "workstyle":
            return any(o in profile.work_styles for o in options)
        if ctype == "goal":
            return any(o in profile.career_goals for o in options)
        if ctype == "academic":
            return profile.academic_level.value in options
        return False

    def run(self, profile: UserProfile) -> List[CareerResult]:
        """
        Execute the forward-chaining inference loop.
        Returns a list of CareerResult sorted by descending confidence.
        """
        scores:    Dict[str, int]        = {}
        max_scores: Dict[str, int]       = {}
        matched:   Dict[str, List[str]]  = {}

        # Accumulate weights for each career
        for rule in self.rules:
            max_scores[rule.career] = max_scores.get(rule.career, 0) + rule.weight
            if rule.career not in matched:
                matched[rule.career] = []
            if self._match_condition(rule.condition, profile):
                scores[rule.career] = scores.get(rule.career, 0) + rule.weight
                matched[rule.career].append(rule.description)

        multiplier = ACADEMIC_MULTIPLIER[profile.academic_level]
        results: List[CareerResult] = []

        for career, max_score in max_scores.items():
            raw_score  = scores.get(career, 0)
            confidence = int(min(100, (raw_score / max_score) * 100 * multiplier))
            if confidence > 0:
                results.append(CareerResult(
                    career        = career,
                    confidence    = confidence,
                    matched_rules = matched.get(career, []),
                ))

        results.sort(key=lambda r: r.confidence, reverse=True)
        return results


# ─── Example Usage ────────────────────────────────────────────

if __name__ == "__main__":
    # Define a sample student profile
    student = UserProfile(
        interests      = [Interest.TECHNOLOGY, Interest.MATHEMATICS],
        skills         = [Skill.PROGRAMMING, Skill.PROBLEM_SOLVING, Skill.ANALYTICAL],
        academic_level = AcademicLevel.GOOD,
        work_styles    = ["independent", "research"],
        career_goals   = ["high_income", "innovation"],
    )

    engine      = InferenceEngine(KNOWLEDGE_BASE)
    results     = engine.run(student)
    top_careers = results[:5]

    print("\\n=== Career Guidance Expert System ===")
    print(f"Student Profile: {student.interests}, {student.skills}")
    print("\\nTop Career Recommendations:")
    print("-" * 40)

    for rank, result in enumerate(top_careers, start=1):
        bar = "█" * (result.confidence // 5) + "░" * (20 - result.confidence // 5)
        print(f"{rank}. {result.career:<28} [{bar}] {result.confidence}%")
        for rule in result.matched_rules:
            print(f"   ✓ {rule}")
        print()
`;

const sections = [
  { label: "Enumerations", lines: [1, 40] },
  { label: "Data Structures", lines: [41, 65] },
  { label: "Knowledge Base", lines: [66, 108] },
  { label: "Inference Engine", lines: [109, 160] },
  { label: "Example Usage", lines: [161, 999] },
];

function highlight(code: string): React.ReactNode[] {
  const lines = code.split("\n");
  return lines.map((line, i) => {
    let className = "text-slate-300";
    if (line.trimStart().startsWith("#")) className = "text-emerald-400 italic";
    else if (/^\s*(class|def|from|import|if|for|return|and|or|not|in|is)\b/.test(line)) className = "text-sky-400";
    else if (/^\s*("""|\"\"\")/.test(line) || line.includes('"""')) className = "text-amber-300 italic";
    else if (/"[^"]*"/.test(line) || /'[^']*'/.test(line)) className = "text-orange-300";
    else if (/\b(True|False|None|\d+)\b/.test(line)) className = "text-purple-400";
    return (
      <span key={i} className={`block ${className}`}>
        {line || " "}
      </span>
    );
  });
}

export function PythonCodeViewer() {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState<string | null>("Inference Engine");

  const handleCopy = () => {
    navigator.clipboard.writeText(PYTHON_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border" style={{ borderColor: "var(--border)" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3" style={{ background: "#0f1923" }}>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="font-mono text-xs text-slate-400">inference_engine.py</span>
          <span className="text-xs px-2 py-0.5 rounded" style={{ background: "#1e3a5f", color: "#60a5fa" }}>Python 3.10+</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-colors"
          style={{ background: copied ? "#064e3b" : "#1e293b", color: copied ? "#34d399" : "#94a3b8" }}
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? "Copied!" : "Copy code"}
        </button>
      </div>

      {/* Section toggles */}
      <div className="flex gap-0 border-b overflow-x-auto" style={{ background: "#0d1b2a", borderColor: "#1e293b" }}>
        {sections.map((s) => (
          <button
            key={s.label}
            onClick={() => setExpanded(expanded === s.label ? null : s.label)}
            className="flex items-center gap-1 px-4 py-2 text-xs whitespace-nowrap border-r transition-colors"
            style={{
              borderColor: "#1e293b",
              color: expanded === s.label ? "#38bdf8" : "#64748b",
              background: expanded === s.label ? "#0f2744" : "transparent",
            }}
          >
            {expanded === s.label ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            {s.label}
          </button>
        ))}
      </div>

      {/* Code block */}
      <div className="overflow-auto" style={{ background: "#0d1117", maxHeight: "520px" }}>
        <pre className="p-5 text-xs leading-6 font-mono">
          <code>{highlight(PYTHON_CODE)}</code>
        </pre>
      </div>
    </div>
  );
}
