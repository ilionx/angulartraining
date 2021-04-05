// 1. Onderstaande functie neemt een waarde (bijvoorbeeld 'foo') en een getal (bijvoorbeeld 3) en geeft een array terug die de waarde
//    een aantal keer herhaalt (bijvoorbeeld ['foo', 'foo', 'foo']). Het return type van de functie is van het type any. Gebruik generics
//    om ervoor te zorgen dat het return type van repeat gelijk is aan een array van het type van value.

function repeat(value: any, times: number): any[] {
  return Array(times).fill(value);
}

// 2. Hoe zorg ik er in 1 voor dat value altijd een subtype is van onderstaande Repeatable interface? (hint: gebruik 'extends');

interface Repeatable {
  value: string;
}
