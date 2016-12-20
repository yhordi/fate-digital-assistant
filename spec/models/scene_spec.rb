describe Scene do
  let(:scene) { FactoryGirl.create :scene}
  let(:npc) { FactoryGirl.create :npc }
  xdescribe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :description }
    it 'does not validate scene with a non-unique name' do
      invalid_scene = Scene.new(name: scene.name)
      expect(invalid_scene).to_not be_valid
    end
    it 'validates a scene with a unique name' do
      valid_scene = Scene.new(name: 'laskdflaskdj', description: 'p193efoka')
      expect(valid_scene).to be_valid
    end
    it 'does not validate scene with a non-unique description' do
      invalid_scene = Scene.new(name: scene.description)
      expect(invalid_scene).to_not be_valid
    end
    it 'validates a scene with a unique description' do
      valid_scene = Scene.new(name: 'laskdflaskdj', description: 'p193efoka')
      expect(valid_scene).to be_valid
    end
  end
  describe 'associations' do
    describe 'has_many npcs through npc_scenes' do
      it 'has many npcs' do
        scene.npcs << npc
        scene.save!
        expect(scene.npcs).to include(npc)
      end
    end
  end
end
