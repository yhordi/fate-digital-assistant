var SkillForm = React.createClass({
  render: function() {
    return(
      <form>
          <label for="skillName">Skill Name</label>
        <div>
          <input id="skillName" name="name" />
        </div>
          <label for="skillDescription">Description</label>
        <div>
          <textarea id="skillDescription" name="description"></textarea>
        </div>
          <label for="advantage">Create an Advantage</label>
        <div>
          <textarea id="advantage" name="advantage"></textarea>
        </div>
          <label for="overcome">Overcome</label>
        <div>
          <textarea id="overcome" name="overcome"></textarea>
        </div>
          <label for="attack">attack</label>
        <div>
          <textarea id="attack" name="attack"></textarea>
        </div>
          <label for="defend">defend</label>
        <div>
          <textarea id="defend" name="defend"></textarea>
        </div>
        <input type="submit" />
      </form>
    )
  }
});
