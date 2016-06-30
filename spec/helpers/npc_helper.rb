module NpcHelper
  def check_level(skill, level)
    skill.level = level
    if level.between?(3, 4)
      level = 2
    elsif level == 5
      level = 3
    end
    npc.character_skills << skill
  end
end
