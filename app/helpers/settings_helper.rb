module SettingsHelper
  attr_reader :settings

  def self.settings
  [
    "SciFi",
    "Fantasy",
    "Historical",
    "Modern",
    "Other"
  ]
  end
end
