<script lang="ts">
  export let data;
  
	import Products from '$lib/components/Products.svelte';
	import Hero from '$lib/components/Hero.svelte';

  import { onMount } from "svelte";

  interface SlideItem {
    icon: string;
    text: string;
  }

  interface Slide {
    title: string;      // HTML allowed
    intro: string;  // short intro under title
    content: string;    // HTML for multiple paragraphs
    items: SlideItem[];
  }
    let slides: Slide[] = [
    {
      title: 'Hvad er <span class="text-[#007EE1]">proteinpulver?</span>',
      intro: 'Få styr på hvad proteinpulver er, og hvorfor det er et af de mest populære kosttilskud til træning, restitution og muskelopbygning.',
      content: `
        <p><strong>Proteinpulver</strong> er et kosttilskud i pulverform, som primært består af <strong>protein</strong>. Det gælder for alle typer proteinpulver – også <em>billigt proteinpulver</em>.</p>
        <p>Afhængig af producenten kan proteinkilden stamme fra <strong>mælk</strong> (valle/whey), <strong>ærter</strong>, <strong>soya</strong>, <strong>ris</strong> eller <strong>hamp</strong>.</p>
        <p>Den mest populære type er <strong>valleprotein</strong> (whey), som er baseret på mælkeprotein. Protein er en af kroppens vigtigste byggesten og et af de fire makronæringsstoffer: <em>fedt, kulhydrater, protein og alkohol</em>.</p>
        <p>Protein spiller en central rolle i kroppens evne til at <strong>gendanne celler og opbygge muskler</strong>, hvilket gør proteinpulver til et populært valg blandt personer, der træner eller ønsker at øge deres daglige proteinindtag.</p>
      `,
      items: [
        { icon: "🥛", text: "Mælk, ærter, soja, ris, hamp" },
        { icon: "💪", text: "Til træning og muskelopbygning" },
        { icon: "⚡", text: "Nem og hurtig proteinkilde" }
      ]
    },
    {
      title: 'Typer af <span class="text-[#007EE1]">proteinpulver</span>',
      intro: 'Her får du et overblik over de mest almindelige varianter – og hvad der passer til dig.',
      content: `
        <p><strong>Protein pulver</strong> blandes oftest op med <strong>vand</strong> eller <strong>mælk</strong>. Alt efter dine træningsmål findes der en type proteinpulver, der matcher dit behov. Det klassiske proteinpulver har et lavt indhold af kulhydrater og kalorier og bruges ofte i forbindelse med træning.</p>
        <p>Der findes både <strong>hurtigt optageligt proteinpulver</strong> – kendt som <strong>whey protein</strong> – og <strong>langsomt optageligt protein</strong>, kendt som <strong>kasein protein</strong>. Mange vælger at <em>blande de to typer</em> for at opnå en optimal kombination af hurtigt og langsomt optageligt protein. Det gælder også for <em>billigt proteinpulver</em>.</p>
        <p>En anden variant er <strong>weight gainer</strong>, som indeholder et højt antal kulhydrater og kalorier. Denne type er ideel for personer, der har svært ved at tage på, da den har en langt højere andel af <strong>kulhydrater og fedt</strong> end almindeligt proteinpulver.</p>
        <p>Når du undersøger markedet for proteinpulver, vil du hurtigt opdage, at der findes både <strong>dyrt og billigt proteinpulver</strong> – og at du ofte kan finde gode <strong>proteinpulver tilbud</strong> online, især hvis du køber større mængder.</p>
        <p>Inden du vælger et produkt, er det dog vigtigt at undersøge <strong>kvaliteten</strong>. Hvis du vil finde det bedste proteinpulver til prisen, så læs med videre og bliv klogere på, hvad du skal kigge efter.</p>
      `,
      items: [
        { icon: "⚡", text: 'Hurtigt optageligt <br> (Whey protein)' },
        { icon: "🌙", text: 'Langsomt optageligt <br> (Kasein protein)' },
        { icon: "🥣", text: 'Weight gainer <br> (højt kalorieindhold)' }
      ]
    },
    {
      title: 'Hvordan vurderer man kvaliteten af <span class="text-[#007EE1]">billig proteinpulver?</span>',
      intro: 'Ikke alt proteinpulver er ens – men kvaliteten kan vurderes objektivt ud fra proteinets sammensætning og fordøjelighed.',
      content: `
      <p>
          Først for nylig er <strong>kvaliteten af proteinpulver</strong> blevet et centralt fokus i fitnessbranchen.
          Et vigtigt aspekt i vurderingen er indholdet af <strong>aminosyrer</strong>.
        </p>

        <p>
          Der findes <strong>9 essentielle aminosyrer</strong>, som kroppen ikke selv kan producere.
          Det er primært disse, man kigger på, når man vurderer kvaliteten af et proteinpulver.
          De øvrige aminosyrer kan kroppen selv danne og betragtes derfor som mindre kritiske.
        </p>

        <p>
          Den generelle kvalitet måles i dag ud fra
          <strong>DIAAS-metoden</strong> (<em>Digestible Indispensable Amino Acid Score</em>),
          som ikke kun vurderer mængden af essentielle aminosyrer, men også
          <strong>fordøjeligheden</strong> af proteinkilden.
        </p>

        <p>
          Alt <strong>proteinpulver solgt i Danmark</strong> skal leve op til bestemte kvalitetsstandarder,
          og der er derfor ingen risiko for at købe et produkt, der er direkte skadeligt.
        </p>

        <p>
          På vores side kan du finde <strong>alle typer proteinpulver billigt</strong>,
          og vi angiver altid <strong>kalorier, protein og kulhydrater pr. 100 gram</strong>,
          så du nemt kan finde det bedste <strong>proteinpulver tilbud</strong> til dine behov.
        </p>
      `,
      items: [
        { icon: "🧬", text: '9 essentielle aminosyrer' },
        { icon: "📊", text: 'DIAAS-metoden for kvalitet' },
        { icon: "✅", text: 'Testet og godkendt i Danmark' }
      ]
    },
    {
      title: 'Hvorfor tage <span class="text-[#007EE1]">billigt proteinpulver?</span>',
      intro: 'Proteinpulver er ikke nødvendigt for at blive stærk – men det kan være en smart og praktisk måde at sikre dit daglige proteinindtag.',
      content: `
      <p>
          <strong>Billig proteinpulver</strong> er ikke et krav for at øge din styrke – mennesker har opbygget muskler længe før proteinpulver blev opfundet.
          Nøglen ligger i <strong>selve proteinet</strong>. Det vigtigste er at dække sit daglige behov for protein, hvilket også kan gøres gennem kosten, hvis man planlægger det rigtigt.
        </p>

        <p>
          Der er dog flere <strong>fordele ved proteinpulver</strong>. Det er nemt at have med sig og kræver kun en shaker.
          På den måde kan du få protein præcis, når du har brug for det – f.eks. efter træning.
          Derudover er det ofte <strong>billigere</strong> at få sit proteinbehov dækket via proteinpulver end gennem almindelig mad.
        </p>

        <p>
          Du kan næsten altid finde <strong>gode proteinpulver tilbud</strong>, hvilket gør det til en økonomisk løsning for mange.
          Samtidig fås proteinpulver i mange <strong>smagsvarianter</strong> – en fordel for dem, der ikke bryder sig om kød som kylling eller oksekød.
          Der findes endda <strong>veganske alternativer</strong>, som gør det lettere at dække sit proteinbehov billigt.
        </p>

        <p>
          Især <strong>whey protein</strong> har en høj biologisk værdi og bliver hurtigt optaget i kroppen.
          Det betyder, at du hurtigt får <strong>frie aminosyrer i blodet</strong>, som fremmer proteinsyntesen efter hård træning
          og hjælper kroppen med at <strong>genopbygge og styrke musklerne</strong>.
        </p>

        <p>
          Proteinpulver er derfor ikke et krav – men det kan være en <strong>stor fordel</strong> for personer,
          der træner meget, eller som har svært ved at nå deres proteinbehov gennem almindelig kost.
        </p>
      `,
      items: [
        { icon: "🎒", text: 'Nem at have med og indtage' },
        { icon: "💰", text: 'Billigere proteinkilde <br> end almindelig mad</p>' },
        { icon: "⚡", text: 'Hurtig optagelse og bedre restitution' }
      ]
    },
    {
      title: 'Hvordan finder jeg <span class="text-[#007EE1]">billigt proteinpulver?</span>',
      intro: 'Det handler ikke kun om at finde den laveste pris – men om at finde det proteinpulver, der passer bedst til dine behov og mål.',
      content: `
      <p>
          Hvor findes <strong>billigt proteinpulver</strong>? Hvordan får man mest for pengene? 
          Og hvor gemmer de bedste <strong>proteinpulver tilbud</strong> sig?  
          Der er mange spørgsmål, når man vil finde et produkt, der både er billigt og af høj kvalitet.
        </p>

        <p>
          For at skabe et bedre overblik har vi lavet en <strong>tabel</strong>, der viser de vigtigste parametre
          – herunder prisen per 100 gram proteinpulver.  
          Tallene er omregnet ud fra de mængder, der er i hver pose, så du nemt kan sammenligne produkterne.
        </p>

        <p>
          Vær dog opmærksom på, at tabellen ikke viser <strong>rabatpriser</strong>.  
          Hvis et proteinpulver er på tilbud, vil det altså ikke fremgå direkte i oversigten.
          Det er dog nemt at klikke ind på det enkelte produkt og se eventuelle aktuelle tilbud.
        </p>

        <p>
          Husk, at det <strong>billigste proteinpulver</strong> ikke nødvendigvis er det bedste valg.
          Det afhænger af din livsstil og dit formål.  
          Er du fx på <strong>kur</strong>, er en variant med lavt kalorieindhold og få kulhydrater ofte bedst.
          Ønsker du derimod at tage på, kan et produkt med flere kalorier og kulhydrater være mere oplagt.
        </p>

        <p>
          Prisen afhænger også af faktorer som <strong>brandværdi</strong> og markedsføring.  
          Men sandheden er, at langt størstedelen af det proteinpulver, der sælges i Danmark,
          har en <strong>meget høj kvalitet</strong> – også de billige varianter.
        </p>

        <p>
          Brug derfor tabellen ovenfor til at <strong>sammenligne priser</strong> på proteinpulver med høj kvalitet,
          og find et godt <strong>proteinpulver tilbud</strong>, der matcher dine behov og dit budget.
        </p>
      `,
      items: [
        { icon: "📈", text: 'Sammenlign pris per 100 gram' },
        { icon: "🏷️", text: 'Hold øje med aktuelle tilbud' },
        { icon: "⚖️", text: 'Vælg efter dit behov – ikke kun pris' }
      ]
    },
    {
      title: 'Hvornår skal jeg tage <span class="text-[#007EE1]">proteinpulver?</span>',
      intro: 'Det vigtigste er ikke tidspunktet – men at du får dækket dit daglige proteinbehov. Alligevel kan timingen have betydning for din restitution og muskelopbygning.',
      content: `
      <p>
          Der findes en udbredt myte om, at man <strong>skal drikke sit proteinpulver lige efter træning</strong>.  
          I virkeligheden handler det om at få <strong>nok protein i løbet af dagen</strong> og nå sit samlede daglige mål.
        </p>

        <p>
          Hvis du allerede dækker dit proteinbehov gennem kosten, kan du med fordel tage dit proteinpulver på det tidspunkt,
          hvor du normalt får <strong>mindst protein</strong>.  
          Målet er at have en <strong>stabil proteinkilde</strong> hele dagen igennem.
        </p>

        <p>
          Hvis du derimod supplerer med <strong>proteinbarer</strong> eller anden kost i løbet af dagen,
          kan det være mest optimalt at tage dit proteinpulver <strong>umiddelbart efter træning</strong>.
          På det tidspunkt har kroppen størst behov for næringsstoffer til at <strong>genopbygge muskler</strong> og <strong>fremme restitution</strong>.
        </p>

        <p>
          Dit proteinpulver kan uden problemer <strong>blandes med andre kosttilskud</strong> som kulhydrattilskud eller kreatin.
          Det giver en god balance af byggesten, som kroppen har brug for efter hård træning – fx efter en intens tur på <a href="#" class="text-[#007EE1] hover:underline">romaskinen</a>.
        </p>
      `,
      items: [
        { icon: "🕒", text: 'Få dækket dit proteinbehov <br> i løbet af dagen' },
        { icon: "💪", text: 'Tag det efter træning <br> for optimal restitution' },
        { icon: "⚗️", text: 'Kan kombineres med <br> kreatin og kulhydrattilskud' }
      ]
    },
    {
      title: 'Dosering af <span class="text-[#007EE1]">proteinpulver</span>',
      intro: 'Hvor meget proteinpulver skal man tage? Det afhænger af din kropsvægt, din træning – og af hvilket produkt du bruger.',
      content: `
       <p>
          Doseringen af <strong>proteinpulver</strong> afhænger i høj grad af typen af pulver og hvor meget <strong>proteinindhold</strong> det har.
          De fleste produkter leveres med en <strong>måleske</strong>, som typisk indeholder omkring <strong>35 gram proteinpulver</strong>.
        </p>

        <p>
          Hvis vi tager udgangspunkt i et produkt fra <strong>Bodylab</strong>, giver en skefuld cirka <strong>28 gram protein</strong> –
          men det kan variere alt efter variant.
        </p>

        <p>
          Vil du beregne det mere præcist, kan du bruge denne simple formel:
        </p>

        <div class="bg-[#E6F3FD] border border-[#E6F3FD] rounded-2xl p-6 my-6 text-center">
          <p class="font-semibold text-slate-800 mb-1">👉 Formel for proteinbehov per måltid:</p>
          <p class="text-slate-700"><code>(Kropsvægt uden fedt) × 0,5 = gram protein per måltid</code></p>
          <p class="mt-3 text-slate-600 text-sm">Eksempel: Hvis du vejer 60 kg uden fedt → 60 × 0,5 = <strong>30 g protein</strong> efter træning eller per måltid.</p>
        </div>

        <p>
          Det er altid en god idé at <strong>læse næringsindholdet</strong> på dit proteinpulver, så du ved præcis,
          hvor meget protein du får per skefuld. Det hjælper dig med at undgå fejlkalkulationer og sikre,
          at du får nok protein i forhold til dit mål.
        </p>
      `,
      items: [
        { icon: "⚖️", text: 'Afhænger af kropsvægt <br> og proteinindhold' },
        { icon: "🥄", text: 'Typisk 1 måleske = ca. 28–35 g' },
        { icon: "📊", text: 'Læs næringsindholdet <br> for præcis dosering' }
      ]
    },
    {
      title: 'Hvor meget <span class="text-[#007EE1]">proteinpulver</span> skal du tage?',
      intro: 'Mængden af proteinpulver afhænger af dit samlede proteinbehov – og hvor meget du allerede får gennem din almindelige kost.',
      content: `
      <p>
          Hvor meget <strong>proteinpulver</strong> du skal tage afhænger både af dit daglige <strong>proteinbehov</strong> og af, hvor meget du får gennem kosten.
          Det er vigtigt at huske, at proteinpulver er et <strong>kosttilskud</strong> – det bør derfor kun bruges som et supplement, ikke som en erstatning for almindelig mad.
        </p>

        <p>
          Hvis du vil finde ud af præcis, hvor meget protein du har brug for, kan du bruge en <strong>proteinberegner</strong>.
          Den tager højde for din <em>alder, højde, vægt og aktivitetsniveau</em> for at estimere dit daglige behov.
        </p>

        <div class="bg-[#E6F3FD] border border-[#E6F3FD] rounded-2xl p-6 my-6 text-center">
          <p class="font-semibold text-slate-800 mb-1">👉 Brug en proteinberegner:</p>
          <p class="text-slate-700">Indtast alder, højde, vægt og aktivitetsniveau – få dit daglige proteinbehov beregnet på få sekunder.</p>
        </div>

        <p>
          Flere studier har undersøgt, om et højt proteinindtag kan føre til vægtøgning. I et forsøg indtog testpersoner
          <strong>350 gram protein dagligt i 60 dage</strong>. Resultatet viste ingen nævneværdig forskel i vægt eller kropskomposition
          sammenlignet med kontrolgruppen, som fik et normalt proteinindtag.
        </p>

        <p>
          Testpersonerne spiste i gennemsnit <strong>800 kalorier mere om dagen</strong> end kontrolgruppen, men tog ikke på i fedtprocent.
          Det tyder på, at et <strong>kalorieoverskud fra protein</strong> ikke nødvendigvis fører til øget fedtmasse.
        </p>

        <p>
          Det understreger, at protein er en vigtig byggesten for kroppen – men at det stadig skal balanceres
          som en del af en sund og varieret kost.
        </p>
      `,
      items: [
        { icon: "🥗", text: 'Proteinpulver er <br> et supplement – ikke erstatning' },
        { icon: "🧮", text: 'Brug beregner til at finde <br> dit personlige behov' },
        { icon: "🧬", text: 'Overskud af protein <br> øger ikke nødvendigvis fedtprocent' }
      ]
    }
  ];

  let current: number = 0;
  let interval: number;

  const next = (): void => {
    current = (current + 1) % slides.length;
  };

  const prev = (): void => {
    current = (current - 1 + slides.length) % slides.length;
  };

  onMount(() => {
    interval = window.setInterval(next, 8000); // use window.setInterval for browser
    return () => window.clearInterval(interval);
  });
</script>

<main class="min-h-screen bg-gray-50">
  <Hero
    title={data.category.name}
    text={""}
		categories={data.categories}
  />

  <Products products={data.products} totalPages={data.totalPages} currentPage={data.currentPage} brands={data.brands} retailers={data.retailers} categoryId={1} />

  <div class="relative max-w-5xl mx-auto px-6 py-20">
    <div class="overflow-hidden rounded-3xl shadow-lg border border-[#E6F3FD] bg-white p-10 transition-shadow duration-300 hover:shadow-xl">
      
  {#each slides as slide, index}
    <div class="transition-all duration-500" style="display: {index === current ? 'block' : 'none'}">
      <header class="mb-6 text-center">
        <h2 class="text-4xl font-extrabold text-slate-900">
          {@html slide.title}
        </h2>
        <p class="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
          {slide.intro}
        </p>
      </header>

      <div class="prose prose-lg prose-slate max-w-none mb-8">
        {@html slide.content}
      </div>

      <ul class="mt-12 grid sm:grid-cols-3 gap-6 text-center">
        {#each slide.items as item}
          <li class="p-6 rounded-2xl bg-[#E6F3FD] border border-[#E6F3FD] hover:bg-[#1596EC]/10 transition">
            <span class="block text-3xl mb-2 text-[#007EE1]">{item.icon}</span>
            <p class="font-medium text-slate-700">{@html item.text}</p>
          </li>
        {/each}
      </ul>
    </div>
  {/each}

      <!-- Navigation -->
      <button
        class="absolute top-1/2 left-4 -translate-y-1/2 bg-[#007EE1] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#005bb5]"
        on:click={prev}
      >
        ‹
      </button>
      <button
        class="absolute top-1/2 right-4 -translate-y-1/2 bg-[#007EE1] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#005bb5]"
        on:click={next}
      >
        ›
      </button>

      <!-- Dots -->
      <div class="flex justify-center mt-6 space-x-2">
        {#each slides as _, i}
          <span 
            class="w-3 h-3 rounded-full cursor-pointer"
            class:bg-[#007EE1]={i === current}
            class:bg-gray-300={i !== current}
            on:click={() => current = i}
          ></span>
        {/each}
      </div>
    </div>
  </div>

</main>