import React from "react";

interface SkillItem {
  name: string;
  icon?: React.ReactNode;
}

interface SkillGridProps {
  items: SkillItem[];
}

const SkillGrid: React.FC<SkillGridProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-secondary/50 hover:bg-accent transition-colors"
        >
          <div className="w-12 h-12 flex items-center justify-center text-4xl">
            {item.icon}
          </div>
          <span className="text-sm text-center font-medium text-muted-foreground">
            {item.name}
          </span>
        </div>
      ))}
    </>
  );
};

export default SkillGrid;
