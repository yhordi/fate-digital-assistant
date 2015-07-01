module SettingsHelper
  attr_reader :settings
  def self.settings 
  [
    ["SciFi", 1],
    ["Fantasy", 2],
    ["Horror", 3],
    ["Crime", 4],
    ["Espionage", 5],
    ["Other", 6]
  ]
  end
end