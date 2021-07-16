export default class TypeColors {
  private NormalType: string = "#A8A77A";
  private FireType: string = "#EE8130";
  private WaterType: string = "#6390F0";
  private ElectricType: string = "#F7D02C";
  private GrassType: string = "#7AC74C";
  private IceType: string = "#96D9D6";
  private FightingType: string = "#C22E28";
  private PoisonType: string = "#A33EA1";
  private GroundType: string = "#E2BF65";
  private FlyingType: string = "#A98FF3";
  private PsychicType: string = "#F95587";
  private BugType: string = "#A6B91A";
  private RockType: string = "#B6A136";
  private GhostType: string = "#735797";
  private DragonType: string = "#6F35FC";
  private DarkType: string = "#705746";
  private SteelType: string = "#B7B7CE";
  private FairyType: string = "#D685AD";

  getTypeColor(type: string) {
    switch (type) {
      case 'normal':
        return this.NormalType;
      case 'fire':
        return this.FireType;
      case 'water':
        return this.WaterType;
      case 'electric':
        return this.ElectricType;
      case 'grass':
        return this.GrassType;
      case 'ice':
        return this.IceType;
      case 'fighting':
        return this.FightingType;
      case 'poison':
        return this.PoisonType;
      case 'ground':
        return this.GroundType;
      case 'flying':
        return this.FlyingType;
      case 'psychic':
        return this.PsychicType;
      case 'bug':
        return this.BugType;
      case 'rock':
        return this.RockType;
      case 'ghost':
        return this.GhostType;
      case 'dragon':
        return this.DragonType;
      case 'dark':
        return this.DarkType;
      case 'steel':
        return this.SteelType;
      case 'fairy':
        return this.FairyType;
      default:
        return '#000'
    }
  }
}