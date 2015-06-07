describe 'System', js: true do
  let(:system) { FactoryGirl.create :system }
  context 'A guest user' do
    before(:each) do
      visit systems_path
    end
    it 'can see a description on the systems page' do
      expect(page).to have_content("The FATE digital assistant allows")
    end
    it 'cannot see private systems' do
      expect(page).to_not have_content(system.name)
    end
  end
end