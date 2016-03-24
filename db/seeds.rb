require 'faker'
# user = User.new(name: "user", password: ENV["PASSWORD"])
# user.save!
no_conflict = "#{self.name} is not used for conflicts."
no_attack = "#{self.name} is not used for attacks."
no_defense = "#{self.name} is not used for defense."
a = System.create(name: Faker::Book.title, description: Faker::Lorem.paragraph, user_id: User.last.id)
# Adventure.create(title: Faker::Book.title)
Skill.create(
  name: 'Athletics',
  system_id: a.id,
  overcome: "Athletics allows you to overcome any obstacle that requires physical movement—jumping, running, climbing, swimming, etc. If it resembles something you’d do in the decathlon, you roll Athletics. You use overcome actions with Athletics to move between zones in a conflict if there’s a situation aspect or other obstacle in your way. You also roll Athletics to chase or race in any contests or challenges that rely on these types of activities."
  advantage: "When you’re creating an advantage with Athletics, you’re jumping to high ground, running faster than the opponent can keep up with, or performing dazzling acrobatic maneuvers in order to confound your foes.",
  attack: "Athletics is not meant as an attack skill.",
  defend: "Athletics is a catchall skill to roll for defense in a physical conflict, against closequarters and ranged attacks. You can also use it to defend against characters trying to move past you, if you’re in a position to physically interfere with who-
ever’s making the attempt.",
  default_set: true)
Skill.create(
  name: 'Burglary',
  system_id: a.id,
  overcome: "As stated above, Burglary allows you to overcome any obstacle related to theft or infiltration. Bypassing locks and traps, pickpocketing and filching, covering your tracks, and other such activities all fall under the purview of this skill.",
  advantage: "You can case a location with Burglary, to determine how hard it will be to break into and what kind of security you’re dealing with, as well as discover any vulnerabilities you might exploit. You can also examine the work of other burglars to determine how a particular heist was done, and create or discover aspects related to whatever evidence they may have left behind.",
  attack: no_conflict,
  defend: no_conflict,
  default_set: true)
Skill.create(
  name: 'Contacts',
  system_id: a.id,
  overcome: "You use Contacts to overcome any obstacle related to finding someone you need to find. Whether that’s old-fashioned “man on the street” type of work, polling your information network, or searching archives and computer databases, you’re able to hunt down people or somehow get access to them.",
  advantage: "Contacts allows you to know who the perfect person to talk to is for anything you might need, or to decide that you know the perfect person already. It’s likely that you’ll create story details with this skill, represented by aspects. (“Hey, guys, my contacts tell me that Joe Steel is the Best Mechanic For A Thousand Miles—we should talk to him.”)
You can also create an advantage that represents what the word on the street is about a particular individual, object, or location, based on what your contacts tell you. These aspects almost always deal with reputation more than fact, such as Known as a Mean Guy or Notorious Swindler. Whether that person lives up to their reputation is anybody’s guess, though that doesn’t invalidate the aspect—people often have misleading reputations that complicate their lives.
Contacts could also be used to create aspects that represent using your information network to plant or acquire information.",
  attack: no_attack,
  defend: "Contacts can be used to defend against people creating social advantages against you, provided your information network can be brought to bear in the situation. You might also use it to keep someone from using Deceive or Contacts to go “off the grid”, or to interfere with Investigate attempts to find you.",
  default_set: true)
Skill.create(
  name: 'Crafts',
  system_id: a.id,
  overcome: "Crafts allows you to build, break, or fix machinery, presuming you have the time and tools you need. Often, actions with Crafts happen as one component of a more complex situation, making it a popular skill for challenges. For example, if you’re just fixing a broken door, neither success nor failure is interesting; you should just succeed and move on. Now, if you’re
trying to get your car to start while a pack of werewolves is hunting you...".
  advantage: "You can use Crafts to create aspects representing features of a piece of machinery, pointing out useful features or strengths you can use to your advantage (Armor-Plated, Rugged Construction) or a vulnerability for you to exploit (Flaw in the Cross-Beam, Hasty Work).
Creating Crafts advantages can also take the form of quick and dirty sabotage or jury-rigging on mechanical objects in the scene. For example, you might create a Makeshift Pulley to help you get to the platform above you, or throw something into the ballista that’s firing on you to give it a Jammed Pivoting Joint and make it harder to hit you.",
  attack: "You probably won’t use Crafts to attack in a conflict, unless the conflict is specifically about using machinery, like with siege weaponry. GMs and players, talk over the likelihood of this happening in your game if you have someone who is really interested in taking this skill. Usually, weapons you craft are likely to be used with other skills to attack—a guy who makes a sword still needs Fight to wield it well!",
  defend: "As with attacking, Crafts doesn’t defend, unless you’re somehow using it as the skill to control a piece of machinery that you block with.",
  default_set: true)
Skill.create(
  name: 'Deceive',
  system_id: a.id,
  overcome: "Use Deceive to bluff your way past someone, or to get someone to believe a lie, or to get something out of someone because they believe in one of your lies. For nameless NPCs, this is just an overcome roll, but for PCs or named NPCs, it requires a contest, and the target opposes with Empathy. Winning this contest could justify placing a situation aspect on your target, if buying into your lie could help you in a future scene.
Deceive is the skill you use for determining if a disguise works, whether on yourself or others. You’ll need to have the time and supplies to create the desired effect. (Note: This is mainly a Hearts of Steel thing; in some games, this may not be appropriate for Deceive by default_set and should require a stunt.)
You can also use Deceive to do small tricks of sleight-of-hand and misdirection.",
  advantage: "Use Deceive to create momentary distractions, cover stories, or false impressions. You could feint in a swordfight, putting an opponent Off-Balance and setting you up for an attack. You could do the whole, “What’s that over there!” trick to give you a Head Start when you run away. You could establish a Wealthy Noble Cover Story for when you attend a royal ball. You could trick someone into revealing one of their aspects or other information.",
  attack: "Deceive is an indirect skill that creates a lot of opportunities you can capitalize on, but it doesn’t do direct harm to an individual.",
  defend: "You can use Deceive to throw off Investigation attempts with false information and to defend against efforts made to discern your true motives with the Empathy skill.",
  default_set: true)
Skill.create(
  name: 'Drive',
  system_id: a.id
  overcome: "Drive is the equivalent of Athletics when you’re in a vehicle—you use
it to successfully accomplish movement in the face of difficult circumstances, like rough terrain, small amounts of clearance, or stunt driving. Obviously, Drive is also ripe for contests, especially chases and races.",
  advantage: "You can use Drive to determine the best way to get somewhere in a vehicle, and a good enough roll might allow you to learn features of the route that get expressed as aspects, or declare that you know a Convenient Shortcut or something similar.
You can also just read the Athletics description, and then make it about a vehicle. Advantages created using Drive often revolve around getting good positioning, doing a fancy maneuver (Did a Barrel Roll, anyone?), or putting your opponent in a bad spot.",
  attack: "Drive isn’t usually used as an attack skill (though stunts can certainly alter this). If you want to ram a vehicle, you can attack with Drive, but you take the same shifts of harm you inflict.",
  defend: "Avoiding damage to a vehicle in a physical conflict is one of the most common uses of Drive. You can also use it to defend against advantages being created against you or overcome actions of someone trying to move past you in a vehicle.",
  default_set: true)
Skill.create(
  name: 'Empathy',
  system_id: a.id,
  overcome: "You don’t really use Empathy to overcome obstacles directly—normally, you find out some information with it, and then use another skill to act. In some cases, though, you might use Empathy like you would Notice, to see if you catch a change in someone’s attitude or intent.",
  advantage: "You can use Empathy to read a person’s emotional state and get a general sense of who they are, presuming you have some kind of interpersonal contact with them. Most often, you’ll use this to assess the aspects on another character’s sheet, but sometimes you’ll also be able to create new aspects, especially on NPCs. If the target has some reason to be aware that you’re trying to read them, they can defend with Deceive or Rapport.
You can also use Empathy to discover what circumstances will allow you to make mental attacks on someone, figuring out their breaking points.",
  attack: no_attack,
  defend: "This is the skill to go to in order to defend against Deceive actions, allowing you to pierce through lies and see through to someone’s true intent. You can also use it to defend against those creating social advantages against you in general.",
  default_set: true)
Skill.create(
  name: 'Fight',
  system_id: a.id,
  overcome: "Since you don’t really use Fight outside of a conflict, it’s not often used to overcome obstacles. You might use it to display your fighting prowess in a demonstration, or to participate in some kind of regulated bout or sport fighting, which would allow you to use this skill in a contest.",
  avantage: "You’ll probably use Fight for most of the advantages you create in a physical conflict. Any number of special moves can be covered with advantages: a targeted strike to stun, a “dirty move,” disarming, and so on. You could even use Fight to assess another fighter’s style, spotting weaknesses in his or her form that you can exploit.",
  attack: "This is self-explanatory. You make physical attacks with Fight. Remember, this is for close-in work, so you have to be in the same zone as your opponent.",
  defend: " You use Fight to defend against any other attack or create an advantage attempt made with Fight, as well as pretty much any action where violently interposing yourself could prevent it from
happening. You can’t use this skill to defend against Shoot attacks, unless the setting is fantastical enough that you can catch missiles or swat them from the air or use laser swords to deflect
blasters.",
  default_set: true
  )
Skill.create(
  name: 'Investigate',
  system_id: a.id,
  overcome: "Investigate obstacles are all about information that’s hard to uncover for some reason. Analyzing a crime scene for clues, searching a cluttered room for the item you need, even poring over a musty old tome to try and find the passage that makes everything make sense.
Racing against the clock to collect evidence before the cops show up or disaster occurs is a classic way to use Investigate in a challenge.",
  advantage: "Investigate is probably one of the most versatile skills you can use to create an advantage. As long as you’re willing to take the time, you can find out just about anything about anyone, discover nearly any detail about a place or object, or otherwise make up aspects about nearly anything in the game world that your character could reasonably unearth.
If that sounds broad, consider the following as just a few of the possibilities for using Investigate: eavesdropping on a conversation, looking for clues at a crime scene, examining records, verifying the truth of a piece of information, conducting surveillance, and researching a cover story.",
  attack: no_conflict,
  defend: no_conflict,
  default_set: true
  )
Skill.create(
  name: 'Lore',
  system_id: a.id,
  overcome: "You can use Lore to overcome any obstacle that requires applying your character’s knowledge to achieve a goal. For example, you might roll Lore to decipher some ancient language on a tomb wall, under the presumption that your character might have researched it at some point.
Frankly, you can use Lore as a go-to skill any time you need to know if your character can answer a difficult question, where some tension exists in not knowing the answer.",
  advantage: "Like Investigate, Lore provides a lot of very flexible opportunities to create advantages, provided you can research the subject in question. More often than not, you’ll be using Lore to get a story detail, some obscure bit of information that you uncover or know already, but if that information gives you an edge in a future scene, it might take the form of an aspect. Likewise, you can use Lore to create advantages based on any subject matter your character might have studied, which gives you a fun way to add details to the setting.",
  attack: no_attack,
  defend: "Lore isn’t used in conflicts.
(In some examples in the FATE core rulebook, the magic that Zird the Arcane uses is based
on Lore, so that’s a unique exception to this—he could conceivably use Lore for magical attacks and defenses. See the Extras chapter of the FATE core rulebook for more details about ways to do magic and powers.)",
  default_set: true
  )
Skill.create(
  name: 'Notice',
  system_id: a.id,
  overcome: "You don’t really use Notice to overcome obstacles too often but when you do it’s used in a reactive way: noticing some- thing in a scene, hearing a faint sound, spotting the concealed gun in that guy’s waistband.
Note that this isn’t license for GMs to call for Notice rolls left and right to see how generally observant the players’ characters are; that’s boring. Instead, call for Notice rolls when succeeding would result in something interesting happening and failing would result in something just as interesting.",
  advantage: "You use Notice to create aspects based on direct observation—looking over a room for details that stand out, finding an escape route in a debris-filled building, notic- ing someone sticking out in a crowd, etc. When you’re watching people, Notice can tell you what’s going on with them externally; for internal changes, see Empathy. You might also use Notice to declare that your character spots something you can use to your advantage in a situation, such as a convenient Escape Route when you’re trying to get out of a building, or a Subtle Weakness in the enemy’s line of defense. For example, if you’re in a barroom brawl you could make a Notice roll to say that you spot a puddle on the floor, right next to your opponent’s feet that could cause him to slip.",
  attack: no_attack,
  defend: "You can use Notice to defend against any uses of Stealth to get the drop on you or ambush you, or to discover that you’re being observed.",
  default_set: true
  )
Skill.create(
  name: 'Physique',
  system_id: a.id,
  overcome: "You can use Physique to overcome any obstacles that require the application of brute force—most often to overcome a situation aspect on a zone—or any other physical impedance, like prison bars or locked gates. Of course, Physique is the classic skill for arm-wrestling matches and other contests of applied strength, as well as marathons or other endurance-based challenges.",
  advantage: " Physique has a lot of potential for advan- tages in physical conflict, usually related to grappling and holding someone in place, making them Pinned or Locked Down. You might also use it as a way of discovering physical impairments pos- sessed by the target—grappling the old mercenary tells you that he has a Bum Leg or somesuch.",
  attack: "Physique is not used to harm people directly—see the Fight skill for that.",
  defend: "Though you don’t generally use Physique to defend against attacks, you can use it to provide active opposition to someone else’s movement, provided you’re in a small enough space that you can effectively use your body to block access. You might also interpose something heavy and brace it to stop someone from getting through.",
  special: "The Physique skill gives you additional physical stress or conse- quence slots. Average (+1) or Fair (+2) gives you a 3-point stress box. Good (+3) or Great (+4) gives you a 3-point and a 4-point stress box. Superb (+5) and above give you an additional mild consequence slot along with the additional stress boxes. This slot can only be used for physical harm.",
  default_set: true
  )
Skill.create(
  name: 'Provoke',
  system_id: a.id,
  overcome: "You can Provoke someone into doing what you want in a fit of emotional pique. You might intimidate them for infor- mation, piss them off so badly that they act out, or scare them into running away. This will often happen when you’re going up against nameless NPCs or it isn’t worthwhile to play out the par- ticulars. Against PCs or important NPCs, you’ll need to win a contest. They oppose with Will.
",
  advantage: "You can create advantages representing momentary emotional states, like Enraged, Shocked, or Hesitant. Your target opposes with Will.",
  attack: "You can make mental attacks with Provoke, to do emo- tional harm to an opponent. Your relationship with the target and the circumstances you’re in figure a great deal into whether or not you can use this action.",
  defend: "Being good at provoking others doesn’t make you better at avoiding it yourself. You need Will for that.",
  default_set:true
  )
Skill.create(
  name: 'Rapport',
  system_id: a.id,
  overcome: "Use Rapport to charm or inspire people to do what you want, or to establish a good connection with them. Charm your way past the guard, convince someone to take you into their confidence, or
become the man of the hour at the local tavern. For nameless NPCs, this is just an overcome action, but you may have to enter a contest to sufficiently ingratiate yourself to a named NPC or PC.",
  advantage: "Use Rapport to establish a positive mood on a target or in a scene or to get someone to confide in you out of a genuine sense of trust. You could pep talk someone into having Elevated Confidence, or stir a crowd into a Joyful Fervor, or simply make someone Talkative or Helpful.",
  attack: no_attack,
  defend: "Rapport defends against any skill used to damage your reputation, sour a mood you’ve created, or make you look bad in front of other people. It does not, however, defend against mental attacks. That requires Will.",
  default_set: true
  )
Skill.create(
  name: 'Resources',
  system_id: a.id,
  overcome: "You can use Resources to get yourself out of or past any situation where throwing money at the problem will help, such as committing bribery or acquiring rare and expensive things. Challenges or contests might involve auctions or bidding wars.",
  advantage: "You might use Resources to grease the wheels and make people more friendly, whether that represents an actual bribe (I Scratch Your Back...) or simply buying drinks for people (In Vino Veritas). You can also use Resources to declare that you have something you need on hand, or can quickly acquire it, which could give you an aspect representing the object.",
  attack: no_conflict,
  defend: no_conflict,
  default_set: true
  )
Skill.create(
  name: 'Shoot',
  system_id: a.id,
  overcome: "Unless, for some reason, you need to demonstrate your Shoot ability in a non-conflict situation, you probably won’t be using this skill for normal obstacles much. Obviously, contests involving Shoot are a popular staple of adventure fiction, and we recommend you look for the opportunity to have them if you have a character who specializes in this.",
  advantage: "In physical conflicts, Shoot can be used to perform a wide variety of moves, like trick shots, keeping someone under heavy fire, and the like. In cinematic games, you might even be able to disarm people and pin their sleeves to walls—pretty much anything you’ve seen in an action movie. You could also make the argument for creating aspects based on your knowledge of guns (like placing a Prone to Jams aspect on an opponent’s gun).",
  attack: "This skill makes physical attacks. You can make them from up to two zones away, unlike with Fight. (Sometimes the range will change with the weapon.)",
  defend: "Shoot is unique in that it doesn’t really have a defense component to it—you’d use Athletics for that. You could use it to lay down some covering fire—which might act as a defense for your allies or provide opposition to someone else’s movement— though it could just as easily be represented by creating an advan- tage (Covering Fire or Hail of Bullets, for example).",
  default_set: true
  )
Skill.create(
  name: 'Stealth',
  system_id: a.id,
  overcome: "You can use Stealth to get past any situation that pri- marily depends on you not being seen. Sneaking past sentries and security, hiding from a pursuer, avoiding leaving evidence as you pass through a place, and any other such uses all fall under the purview of Stealth.",
  advantage: "You’ll mainly use Stealth to create aspects on yourself, setting yourself in an ideal position for an attack or ambush in a conflict. That way, you can be Well-Hidden when the guards pass by and take advantage of that, or Hard to Pin Down if you’re fighting in the dark.",
  attack: no_attack,
  defend: "You can use this to foil Notice attempts to pinpoint you or seek you out, as well as to try to throw off the scent of an Investigate attempt from someone trying to track you.",
  default_set: true)
Skill.create(
  name: 'Will',
  system_id: a.id,
  overcome: "You can use Will to pit yourself against obstacles that require mental effort. Puzzles and riddles can fall under this cat- egory, as well as any mentally absorbing task, like deciphering a code. Use Will when it’s only a matter of time before you over- come the mental challenge, and Lore if it takes something more than brute mental force to get past it. Many of the obstacles that you go up against with Will might be made part of challenges, to reflect the effort involved.
Contests of Will might reflect particularly challenging games, like chess, or competing in a hard set of exams. In settings where magic or psychic abilities are common, contests of Will are popu- lar occurrences.",
  advantage: "You can use Will to place aspects on your- self, representing a state of deep concentration or focus.",
  attack: "Will isn’t really used for attacks. That said, in settings where you allow psychic abilities, full-on psychic conflict might be something you can do with this skill. That’s the sort of thing that would be added to Will by taking a stunt or extra.",
  defend: "Will is the main skill you use to defend against mental attacks from Provoke, representing your control over your reactions.",
  special: "The Will skill gives you additional mental stress boxes or con- sequence slots. Average (+1) or Fair (+2) gives you a 3-point stress box. Good (+3) or Great (+4) gives you a 3-point and a 4-point stress box. Superb (+5) and above give you an additional mild consequence slot along with the additional stress boxes. This slot can only be used for mental harm.")
