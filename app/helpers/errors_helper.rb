module ErrorsHelper
  def unsaved_password(reason)
    "Your new password was not saved. #{reason}"
  end

  def invalid_password
    "You entered your original password incorrectly."
  end

  def non_matching
    "Your new passwords don't match."
  end

end
