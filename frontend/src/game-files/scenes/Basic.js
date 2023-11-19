import star from './assets/star.png'
import bomb from './assets/bomb.png'
import sky from './assets/sky.png'
// You can write more code here

/* START OF COMPILED CODE */


import Phaser from "phaser";

export default class Basic extends Phaser.Scene {

	constructor() {
		super("Basic");

		/* START-USER-CTR-CODE */
		// Write your code here.
		var lonelinessFears = null;
		var painFears = null;
		var liesFear = null;
		var path = null;
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// layer_1
		const layer_1 = this.add.layer();

		// sky
		const sky = this.add.image(400, 300, "sky");
		layer_1.add(sky);

		// layer_2
		const layer_2 = this.add.layer();

		// rectangle_1
		const rectangle_1 = this.add.rectangle(152.27051443678096, 338.67404138296513, 128, 128);
		rectangle_1.setOrigin(0.7989883622719164, -1.518171445335435);
		rectangle_1.isFilled = true;
		layer_2.add(rectangle_1);

		// rectangle
		const rectangle = this.add.rectangle(397.8270568847656, 628.7893338688233, 128, 128);
		rectangle.setOrigin(0.5298988362271917, 0.709291853590341);
		rectangle.isFilled = true;
		layer_2.add(rectangle);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(680, 600, 128, 128);
		rectangle_2.isFilled = true;
		layer_2.add(rectangle_2);

		this.layer_1 = layer_1;
		this.layer_2 = layer_2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Layer} */
	layer_1;
	/** @type {Phaser.GameObjects.Layer} */
	layer_2;

	/* START-USER-CODE */

	// Write your code here


	preload(){
		const assets = require('./assets/asset-pack.json');
		this.load.image('star', star);
		this.load.image('bomb', bomb);
		this.load.image('sky', sky);
	}

	//------------------------------------------------------------
	create() {


		this.editorCreate();
		this.layer_1.depth = 1;
		this.layer_2.depth = 100;


		//variables
		var enlargedHitArea = new Phaser.Geom.Ellipse(0,0,100,100);

		//Loneliness Fear code
		this.lonelinessFears = this.physics.add.group({
			classType: Loneliness,
			createCallback: (child) => {this.LonelinessConstructor(child)}
		});
		//END Loneliness fear code

		//painFears code
		this.painFears = this.physics.add.group({
			classType: Pain,
			createCallback: (child) => {this.PainConstructor(child)}
		});
		//End painFears code

		//lieFear code
		this.lieFear = this.physics.add.group({
				classType: Lie
		});

		//inputs for weapons:
		//WideAreaWeapon
		this.input.keyboard.on('keydown-TWO', function (event){
			Loneliness.enlarged = true;
			Loneliness.rayWeapon = false;
			Lie.enlarged = true;
			Lie.rayWeapon = false;
			Pain.enlarged = true;
			Pain.rayWeapon = false;
			this.painFears.children.iterate(function(child){
				child.ChangeWeapon();
			});

			this.lonelinessFears.children.iterate(function(child) {
				child.ChangeWeapon();
			});
			this.lieFear.children.iterate(function(child){
				child.ChangeWeapon();
			});
		},this);
		//StandardWeapon
		this.input.keyboard.on('keydown-ONE', function (event){
			Loneliness.enlarged = false;
			Loneliness.rayWeapon = false;
			Pain.enlarged = false;
			Pain.rayWeapon = false;
			Lie.enlarged = false;
			Lie.rayWeapon = false;
			this.painFears.children.iterate(function(child){
				child.ChangeWeapon();
			});
			this.lieFear.children.iterate(function(child){
				child.ChangeWeapon();
			});
			this.lonelinessFears.children.iterate(function(child) {
					child.ChangeWeapon();
			});
		},this);
		//RayWeapon
		this.input.keyboard.on('keydown-THREE', function (event){
			Loneliness.enlarged = false;
			Loneliness.rayWeapon = true;
			Pain.enlarged = false;
			Pain.rayWeapon = true;
			Lie.enlarged = false;
			Lie.rayWeapon = true;
			this.painFears.children.iterate(function(child){
				child.ChangeWeapon();
			});
			this.lonelinessFears.children.iterate(function(child) {
				child.ChangeWeapon();
			});
			this.lieFear.children.iterate(function(child){
				child.ChangeWeapon();
			});
		},this);


		//Spawn timer
		this.timedEvent = this.time.addEvent({ delay: 10000, callback: this.spawnFear, callbackScope: this, loop: true });

		//Collisions
		this.physics.add.collider(this.painFears, this.lieFear);
		this.physics.add.collider(this.lonelinessFears, this.lieFear);
	}
	//Shoot functions

	//--------------------------------------------------------------------
	//Timer callback functions
	//Spawn function
	spawnFear(){
		var positions = [
			{x:200, y:570 },
			{x:400, y:570 },
			{x:600, y:570 },
		];
		var randomPosition = Phaser.Math.RND.pick(positions);
		//this.lonelinessFears.create(randomPosition.x, randomPosition.y, 'star');
		this.lonelinessFears.create(randomPosition.x, randomPosition.y, 'bomb');
		this.painFears.create(randomPosition.x, randomPosition.y, 'bomb');
		if (!Lie.exists){
			this.spawnLie();
		}
	}

	spawnLie(){
		this.path = new Phaser.Curves.Path(100, 0);
		this.path.lineTo(100,50);
		const max = 8;
		const h = 500/max;
		for (let i = 0; i < max; i++)
        {
            if (i % 2 === 0)
            {
                this.path.lineTo(700, 50 + h * (i + 1));
            }
            else
            {
                this.path.lineTo(100, 50 + h * (i + 1));
            }
        }
		this.path.lineTo(100,650);
		var links = Phaser.Math.Between(4,10);
		for(let i = 0; i < links; i++){
			var texture = "";
			if(i===0){
				texture = 'star';
			}else{
				texture = 'bomb';
			}
			const chainLink = this.lieFear.create(100,0,texture);
			chainLink.setData('vector', new Phaser.Math.Vector2());
			chainLink.setInteractive();
			Lie.chainLinks += 1;
			chainLink.depth = 11;

			chainLink.ChangeWeapon();
			this.tweens.add({
				targets: chainLink,
				ease:'Linear',
				duration:12000,
				repeat: 3,
				z:1,
				delay:i*100,
				onComplete: ()=> {Lie.exists= false;}
			});
		}
		Lie.exists = true;

	}



	//Fear constructor functions


	fearsConstructor(child){
		child.setBounce(1, 1);
		child.setCollideWorldBounds(true);
		child.allowGravity = false;
		child.setInteractive();
		child.depth = 10;
	}

	LonelinessConstructor(child) {
		this.fearsConstructor(child)
		child.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(100, 200));
		child.ChangeWeapon();
		this.time.addEvent({
			delay: Phaser.Math.Between(10000, 15000),
			repeat: 1,
			callback: function() {
				if(this.active){
					this.setVelocityY(300);
					this.readyToEscape = true;
				}
			},
			callbackScope: child
		});
	}

	PainConstructor(child) {
		this.fearsConstructor(child);
		child.setVelocity(Phaser.Math.Between(-50, 50), Phaser.Math.Between(50, 120));
		//WeaponLogic
		child.ChangeWeapon();
		//escape logic
		this.time.addEvent({
			delay: Phaser.Math.Between(10000, 15000),
			repeat: 1,
			callback: function() {
				if(this){
					if(this.active){
						this.setVelocityY(300);
						this.readyToEscape = true;
					}
				}
			},
			callbackScope: child
		});
	}

	update() {
		//Loneliness update Logic
		this.lonelinessFears.children.iterate(function(child) {
			if(child){
				if(child.readyToEscape){
					if (child.y < 50){
						child.destroy();
						console.log("loneliness ran away");
					}
				}
			}
		});

		//Pain update logic
		this.painFears.children.iterate(function(child){
			if(child){
				if (child.frenzied){
					if(child.y < (child.hitCoords.y - child.frenzyField.h/2)){
						child.setVelocityY(500);
					}
					if(child.y >(child.hitCoords.y + child.frenzyField.h/2)){
						child.setVelocityY(-500);
					}
					if(child.x > (child.hitCoords.x + child.frenzyField.w/2)){
						child.setVelocityX(-500);
					}
					if(child.x < (child.hitCoords.x - child.frenzyField.w/2)){
						child.setVelocityY(500);
					}
				}
				else if (child.readyToEscape){
					if (child.y < 50){
						child.destroy();
						console.log("pain ran away");
					}
				}
			}
		});
		//Lie Update logic
		const chainLinks = this.lieFear.getChildren();
		for (let i = 0; i < chainLinks.length; i++)
        {
            const t = chainLinks[i].z;
            const vec = chainLinks[i].getData('vector');

            //  The vector is updated in-place
            this.path.getPoint(t, vec);

            chainLinks[i].setPosition(vec.x, vec.y);

            chainLinks[i].setDepth(chainLinks[i].y);
        }
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
class Loneliness extends Phaser.Physics.Arcade.Sprite {
	static defaultHitArea = {h:40, w:40};
	static enlargedHitArea = {h:150, w:150};
	static enlarged = false;
	static rayWeapon = false;
	constructor(scene, x, y, texture, frame)
	{
		super(scene, x, y, texture, frame);
		this.readyToEscape = false;
	}
	destroy(fromScene = true)
	{
		super.destroy(fromScene);
	}

	Shoot(){
		this.destroy()
	}

	ChangeWeapon(){
		if(Loneliness.enlarged){
			fearHitArea(Loneliness, this.input.hitArea);
			this.removeListener('pointerout');
			this.on('pointerdown', this.Shoot);
		}
		else{
			fearHitArea(Loneliness, this.input.hitArea);
			if(Loneliness.rayWeapon){
				this.removeListener('pointerdown');
				this.on('pointerout', this.Shoot);
			}
			else{
				this.removeListener('pointerout');
				this.on('pointerdown', this.Shoot);
			}
		}
	}

}


class Pain extends Phaser.Physics.Arcade.Sprite {
	static defaultHitArea = {h:40, w:40};
	static enlargedHitArea = {h:150, w:150};
	static enlarged = false;
	static rayWeapon = false;
	constructor(scene, x, y, texture, frame)
	{
		super(scene, x, y, texture, frame);
		this.readyToEscape = false;
		this.lives = 3;
		this.frenzy = false;
		//TODO add random vals for each instance
		this.frenzyField = {w: 200, h:200};
		//Just an initial value
		this.hitCoords = {x:100, y:100};
	}
	destroy(fromScene = true)
	{
		super.destroy(fromScene);
	}
	Shoot(){
		//frenzy logic
		this.frenzied = true;
		this.hitCoords.x = this.x;
		this.hitCoords.y = this.y;
		this.setVelocity(500, Phaser.Math.Between(-500, 500));
		this.scene.time.addEvent({
			delay: 3000,
			repeat: 1,
			callbackScope:this,
			callback: function(){
				if(this){
					if(this.active){
						this.frenzied = false;
					}
				}
			}
		});
		if(Pain.rayWeapon){
			this.destroy()
		}
		else if (Pain.enlarged){
			this.lives -= 2;
			if(this.lives <= 0){
				this.destroy()
			}
		}
		else{
			this.lives -= 1;
			if(this.lives <= 0){
				this.destroy()
			}
		}

	}
	ChangeWeapon(){
		if(Pain.enlarged){
			fearHitArea(Pain, this.input.hitArea);
			this.removeListener('pointerout');
			this.on('pointerdown', this.Shoot);
		}
		else{
			fearHitArea(Pain, this.input.hitArea);
			if(Pain.rayWeapon){
				this.removeListener('pointerdown');
				this.on('pointerout', this.Shoot);
			}
			else{
				this.removeListener('pointerout');
				this.on('pointerdown', this.Shoot);
			}
		}
	}
}

class Lie extends Phaser.Physics.Arcade.Sprite{
	static defaultHitArea = {h:40, w:40};
	static enlargedHitArea = {h:150, w:150};
	static enlarged = false;
	static rayWeapon = false;
	static exists = false;
	static chainLinks = 0;
	constructor(scene, x, y, texture, frame)
	{
		super(scene, x, y, texture, frame);
		this.readyToEscape = false;;
	}
	destroy(fromScene = true)
	{
		super.destroy(fromScene);
	}

	Shoot(){
		this.destroy();
		Lie.chainLinks -= 1;
		if(Lie.chainLinks === 0){
			Lie.exists = false;
		}

	}

	ChangeWeapon(){
		if(Lie.enlarged){
			fearHitArea(Lie, this.input.hitArea);
			this.removeListener('pointerout');
			this.on('pointerdown', this.Shoot);
		}
		else{
			fearHitArea(Lie, this.input.hitArea);
			if(Lie.rayWeapon){
				this.removeListener('pointerdown');
				this.on('pointerout', this.Shoot);
			}
			else{
				this.removeListener('pointerout');
				this.on('pointerdown', this.Shoot);
			}
		}
	}
}


function fearHitArea(fearType, hitArea)
{
	if (fearType.enlarged === false)
	{
		hitArea.setTo(
			-fearType.defaultHitArea.w/2,
			-fearType.defaultHitArea.h/2,
			fearType.defaultHitArea.w,
			fearType.defaultHitArea.h
		);
	}
	else{
		hitArea.setTo(
			-fearType.enlargedHitArea.w/2,
			-fearType.enlargedHitArea.h/2,
			fearType.enlargedHitArea.w,
			fearType.enlargedHitArea.h
		);
	}
}


