describe ScenesController do
  let(:scenario) { FactoryGirl.create :scenario }
  let(:scene) { FactoryGirl.create :scene }
  describe '#index' do
    it "renders a json blob containing all scenes associated with a scenario" do
      get "/scenarios/#{scenario.id}/scenes"
      expect(response.body).to eq(Scene.all.to_json)
    end
    it "responds with a 200" do
      expect(response.status).to eq(200)
    end
  end
end
