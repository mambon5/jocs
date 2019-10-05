function TestImpulse() {
  camera.position.y = 2;
  camera.position.z = 3;
  this.boxLeft = -2.0;
  this.boxRight = 2.0;
  this.boxBottom = 0.0;
  this.boxTop = 4.0;
  this.useLinearImpulse = false;

  // Create the containing box.
  this.bd = new liquidfun.b2BodyDef;
  this.ground = world.CreateBody(this.bd);
    

  var shape = new liquidfun.b2ChainShape;
  shape.vertices.push(new liquidfun.b2Vec2(this.boxLeft, this.boxBottom));
  shape.vertices.push(new liquidfun.b2Vec2(this.boxRight, this.boxBottom));
  shape.vertices.push(new liquidfun.b2Vec2(this.boxRight,this.boxTop));
  shape.vertices.push(new liquidfun.b2Vec2(this.boxLeft, this.boxTop));
  shape.CreateLoop();

  
  this.ground.CreateFixtureFromShape(shape, 0.0);

  var x = [[-1.6,2.1174690266580956],
[-1.2,2.614984904268854],
[-0.8,2.1174690266580956],
[-0.4,3.0434013544336747],
[0,2.1174690266580956],
[0.4,2.614984904268854],
[0.8,3.5270973465552453],
[1.2,3.057221239922862],
[1.6,2.525155648589134]]
  
  var y = [[-1.413083393462048, 1.4886642369000536],
[-1.2057850961326526, 1.65166923474716511],
[-1.2057850961326526, 1.65166923474716511],
[-1.046856401513449, 1.5232139506230227],
[-0.4111416230366351, 2.0690994274459387],
[-1.001406117735015, 1.8170806870648736],
[-0.40423167979232183, 2.0760093701905324],
[0.21766321219586587, 1.8963508588310918],
[0.40423167979232183, 1.6199531490473371],
[0.16238366624136022, 1.364285267497364],
[-0.10019417704254129, 0.9704185310555131],
[-0.010364914866469774, 1.129347214181172],
[-0.010364914866469772, 1.1362571569257662],
[0.13474389326410707, 1.025698073012264],
[0.8311885014738609, 2.7186340454377627],
[-0.22131236086056364, 2.3385871944850996],
[0.831188501473861, 2.7255439881823564],
[1.050847025826004, 2.4491462783986018],
[1.1988751528883388, 2.048369599212157],
[1.3923535637291085, 1.8963508588310918],
[1.1919652096440256, 2.062189484701345],
[1.1297757204452075, 2.0276397709783756]]

  for(i =0; i < 9; i+=1){
    var new_shape = new liquidfun.b2ChainShape;
    new_shape.vertices.push(new liquidfun.b2Vec2(x[i][0], x[i][1]-1));
    new_shape.vertices.push(new liquidfun.b2Vec2(x[i][0], this.boxBottom));
    new_shape.CreateLoop();
    this.ground.CreateFixtureFromShape(new_shape, 0.0);
  }

  for(i=0; i < 22; i+=2){
    var new_shape = new liquidfun.b2ChainShape;
    new_shape.vertices.push(new liquidfun.b2Vec2(y[i][0], y[i][1]));
    new_shape.vertices.push(new liquidfun.b2Vec2(y[i+1][0], y[i+1][1]));
    new_shape.CreateLoop();
    this.ground.CreateFixtureFromShape(new_shape, 0.0);
  }

    var psd = new liquidfun.b2ParticleSystemDef();
  psd.radius = 0.025;
  var particleSystem = world.CreateParticleSystem(psd);

  shape = new liquidfun.b2PolygonShape;
  shape.SetAsBoxXYCenterAngle(2, 0.1, new liquidfun.b2Vec2(-2, 3.6), 0);
  var pd = new liquidfun.b2ParticleGroupDef;
  pd.flags = liquidfun.b2_tensileParticle | liquidfun.b2_viscousParticle;
  pd.shape = shape;
  pd.color = {r: 0, g: 255, b: 0, a: 0}
  particleSystem.CreateParticleGroup(pd);

  shape = new liquidfun.b2PolygonShape;
  shape.SetAsBoxXYCenterAngle(2, 0.1, new liquidfun.b2Vec2(0, 3.6), 0);
  var pd = new liquidfun.b2ParticleGroupDef;
  pd.flags = liquidfun.b2_tensileParticle | liquidfun.b2_viscousParticle;
  pd.shape = shape;
  pd.color = {r: 0, g: 0, b: 255, a: 0}
  particleSystem.CreateParticleGroup(pd);

  shape = new liquidfun.b2PolygonShape;
  shape.SetAsBoxXYCenterAngle(2, 0.1, new liquidfun.b2Vec2(2  , 3.6), 0);
  var pd = new liquidfun.b2ParticleGroupDef;
  pd.flags = liquidfun.b2_tensileParticle | liquidfun.b2_viscousParticle;
  pd.shape = shape;
  pd.color = {r: 255, g: 0, b: 0, a: 0}
  particleSystem.CreateParticleGroup(pd);


  bd = new liquidfun.b2BodyDef;
  var body = world.CreateBody(bd);
  shape = new liquidfun.b2EdgeShape;
  shape.Set(new liquidfun.b2Vec2(-2, 3.2), new liquidfun.b2Vec2(0.75, 3.2));
  body.CreateFixtureFromShape(shape, 0.1);

  bd = new liquidfun.b2BodyDef;
  body = world.CreateBody(bd);
  shape = new liquidfun.b2EdgeShape;
  shape.Set(new liquidfun.b2Vec2(.85, 3.2), new liquidfun.b2Vec2(2, 3.2));
  body.CreateFixtureFromShape(shape, 0.1);
}
y = 1
x = 0
var new_shape = new liquidfun.b2ChainShape;
TestImpulse.prototype.MouseUp = function(p) {
  var isInsideBox = this.boxLeft <= p.x &&
    p.x <= this.boxRight &&
    this.boxBottom <= p.y &&
    p.y <= this.boxTop;
    if(y == 0) {
      y = 1;
      return;
    }
    x = x+1
    new_shape.vertices.push(new liquidfun.b2Vec2(p.x, p.y));
    console.log([p.x, p.y])
    if(x == 2) {
      new_shape.CreateLoop();
      this.ground.CreateFixtureFromShape(new_shape, 0.0);
      new_shape = new liquidfun.b2ChainShape;
      x = 0
    }
  if (isInsideBox) {
    var boxCenter = new liquidfun.b2Vec2(0.5 * (this.boxLeft + this.boxRight),
      0.5 * (this.boxBottom + this.boxTop));
    var direction = new liquidfun.b2Vec2();
    liquidfun.b2Vec2.Sub(direction, p, boxCenter);
    liquidfun.b2Vec2.Normalize(direction, direction);
    //this.ApplyImpulseOrForce(direction);
  }
};
