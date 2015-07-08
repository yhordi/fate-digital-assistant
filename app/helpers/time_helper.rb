module TimeHelper
  def format_time(time)
    time.strftime("%A, %d %b %Y %l:%M %p")
  end
end