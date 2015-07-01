module SettingsHelper
  attr_reader :settings
  def self.settings 
  [
    "SciFi",
    "Fantasy",
    "Horror",
    "Crime",
    "Espionage",
    "Other"
  ]
  end
end