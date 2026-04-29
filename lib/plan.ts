export type PlanSection = {
  id: string;
  num: string;
  short: string;
};

export const planSections: PlanSection[] = [
  { id: "cover", num: "00", short: "Cover" },
  { id: "profile", num: "01", short: "Profile" },
  { id: "baseline", num: "02", short: "Baseline" },
  { id: "strategy-a", num: "03", short: "Strategy A" },
  { id: "strategy-b", num: "04", short: "Strategy B" },
  { id: "medicare", num: "05", short: "Medicare" },
  { id: "window", num: "06", short: "Window" },
  { id: "datapoint", num: "07", short: "Data Point" },
  { id: "waiting", num: "08", short: "Waiting" },
  { id: "roadmap", num: "09", short: "Roadmap" },
  { id: "next", num: "10", short: "Next" },
];
