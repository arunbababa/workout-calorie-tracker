export type BodyPartMenu = {
  name: string
  time: number
  calories: number
  icon?: string
  onClickPart?:(part:string) => void
}