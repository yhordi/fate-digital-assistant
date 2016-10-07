module NpcsHelper
  def names(npcs)
    names = []
    npcs.each do |npc|
      names << npc.name
    end
    names
  end
end
