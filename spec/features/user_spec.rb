describe 'User', js: true do
  let(:user) { FactoryGirl.create :user }
  context 'a guest user' do
    it 'can sign up and see their profile page' do
      username = "user"
      visit root_path
      within '#container form' do
        fill_in 'user[name]', with: username
        fill_in 'user[password]', with: 'password'
        fill_in 'user[password_again]', with: 'password'
        click_on 'Register'
      end
      expect(page).to have_content("FATE: Dimensions Account created.")
    end
  end
  context 'logged in and editing their profile' do
    before(:each) do
      visit root_path
      fill_in 'Username', with: user.name
      fill_in 'Password', with: user.password
      click_on 'Log In'
      click_on 'Edit Profile/Account Details'
    end
    context 'with good params' do
      it 'can fill out their bio' do
        bio = Faker::Lorem.paragraph
        fill_in 'user[bio]', with: bio
        click_on 'Update User'
        expect(page).to have_content(bio)
      end

      it 'can change their password and see a confirmation message' do
        fill_in 'old_password', with: user.password
        fill_in 'user[password]', with: '1234'
        fill_in 'password_again', with: '1234'
        click_on 'Update User'
        expect(page).to have_content('Password updated')
      end
    end
    context 'with bad params' do
      it "will see an error new passwords don't match" do
        fill_in 'old_password', with: user.password
        fill_in 'user[password]', with: '1234'
        fill_in 'password_again', with: '134'
        click_on 'Update User'
        expect(page).to have_content("Your new passwords don't match")
      end

      it "will see an error if original password is incorrect" do
        fill_in 'old_password', with: user.password + '100'
        fill_in 'user[password]', with: '1234'
        fill_in 'password_again', with: '134'
        click_on 'Update User'
        expect(page).to have_content("You entered your original password incorrectly.")
      end
    end
  end
end
