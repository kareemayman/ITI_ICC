abstract class Character {
  String? name;

  Character(String? nam) {
    name = nam;
  }

  // void attack() {
  //   print('attack');
  // }

  // void defend() {
  //   print('defend');
  // }

  // void heal() {
  //   print('heal');
  // }
}

mixin Attacker {
  void attack() {
    print('attack');
  }
}

mixin Defender {
  void defend() {
    print('defend');
  }
}

mixin Healer {
  void heal() {
    print('heal');
  }
}

class Warrior extends Character with Attacker, Defender {
  Warrior() : super('warrior');
}

class Archer extends Character with Attacker, Defender {
  Archer() : super('Archer');

}

class Mage extends Character with Attacker, Defender, Healer {
  Mage() : super('Mage');
}
