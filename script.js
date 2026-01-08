// Content 类：只存储文本数据
class Content {
    constructor() {
        this.texts = {
            default: "succeed",
            index: `We produce knowledge when we interact with the world and then make sense of these experiences. This process involves observing, categorizing, explaining, and sharing information. Knowledge is formed when experiences are turned into concepts, memories or testable claims. `,
            index_intro: `Knowledge refers to facts, information, and skills acquired through experience or education. It includes experiential knowledge, which comes from direct experience; procedural knowledge, which concerns knowing how to do something; and propositional knowledge, which involves knowing that something is true.`,
            lang: `
In our scope of discussion, language refers to a structured system of communication which consists of symbols, meanings and specific rules (grammar).

So, in this case, sign language, math language and braille are classified as language, while art language is not, due to its lacking of systematic relationship between symbol (or signifier) and meaning (or signified).
            `,
            lang_a1: [
               `Language influences knowledge production by shaping how we divide and label the world. When people observe the world, we do not record raw experience, rather, we perceive and organize it unconsciously using words. While production of experiential knowledge and procedural knowledge are shaped by language to some extent, propositional knowledge especially relies on language. Since it’s the knowledge that can be expressed in the form of declarative statements, we must undergo this process of describing what we see before we can form propositional knowledge. 

               Take color as an example, in Greek, dark blue and light blue are treated as separate categories, whereas in English they belong to one word “blue”. A claim in English may describe two “blue” objects as having the same color even when Greek would separate them. The difference is not about vision, but about how observations are turned into statements. Language sets the categories that make propositions possible. As a result, what counts as a clear and testable claim already depends on language. Knowledge production therefore begins with linguistic choices, not with raw experience. 
`
            ],
            lang_a2: [
                `Once a claim is made, it must be explained and tested. Language shapes this stage by controlling precision. In science, formal language allows knowledge to be produced in a controlled way. Clear terms, symbols, and definitions reduce ambiguity. This makes it easier to repeat experiments and check results. Here, language supports reliable propositional knowledge. 
                
                However, in areas like psychology, everyday language is often used. Words such as ‘conscious’, ‘stress’, or ‘self’ do not have fixed meanings. When researchers use these terms, the claims they produce depend on how the words are defined. Two studies may appear to disagree, even when they focus on different meanings of the same word. In this way, language affects whether knowledge claims are seen as strong or weak. It shapes what counts as good evidence and what counts as a valid explanation. Knowledge production is therefore shaped not only by data, but also by how carefully language is used.`
            ],
            lang_a3: [
                `Language also affects whose knowledge is valued. In many societies, academic and global knowledge is produced mainly in a few dominant languages. English is a clear example. Research written in English is more likely to be published and cited. Local knowledge expressed in other languages may be ignored or simplified when translated. This shapes what enters shared knowledge systems. At the same time, translation itself changes meaning, due to that some ideas do not move easily between languages, and cultural terms tied to daily life or land often lose detail when rewritten. This means knowledge can be reshaped to fit the language that carries it. From this view, language is not neutral. Rather, it reflects power, and decides which voices are heard and which are silent. As a result, the knowledge we produce is shaped not only by facts, but also by the language choices behind them.`
            ],
            lang_a4: [
                `Experiential knowledge comes from with direct experience, but it becomes stable knowledge only when patterns are recognized. Language supports this process by giving names to actions, feelings, and outcomes to make them precise. For example, a learner practicing a skill may notice repeated success or failure. When these experiences are described using words such as correct, efficient, or unsafe, the experience is turned into a structured understanding. This allows experiential knowledge to be refined rather than remaining a collection of separate moments.`
            ],
            lang_a5: [
               `Procedural knowledge involves knowing how to perform a task. Language shapes its production by turning actions into stepped guidance which break complex actions into ordered parts, making the skill teachable and repeatable. With language, it becomes transferable across people and contexts, instead of limited imitation. At the same time, language can limit procedural knowledge. Poor instructions or unclear terms can lead to misunderstanding, even when the physical skill is the same. This shows that language does not replace practice, but it shapes how practice becomes shared knowledge. In this way, language supports the refinement, production and spreading of procedural knowledge.`
            ],
            tech: "In Theory of Knowledge, technology is the tools and systems humans create to observe, record, process and share information about the world. It includes physical tools like scientific equipment as well as digital things such as the internet, algorithms and AI.",
            tech_a1: [
                ` Technology has a big impact on how we build experiential knowledge because it changes how we experience the world. These days, a lot of our experiences happen through screens, data or images instead of direct physical contact. For example, what we know about climate change usually comes from satellite pictures and digital models. We don’t get this knowledge from seeing or feeling climate change ourselves. This lets us “experience” things that are far away in time or space. Think about events on the other side of the planet or long-term environmental changes. This makes the range of experiences we can learn from much wider.
                 
                But these experiences are filtered through technology at the same time. What we see or measure depends on the tools we use. Things like virtual reality and simulations also create experiences that feel real even though they’re man-made. These experiences that feel real but aren’t can still shape how we remember things and understand the world. So experiential knowledge becomes broader than ever. It also relies a lot on whether the technology is reliable and how it’s designed.`
            ],
            tech_a2: [
                `When talking about procedural knowledge — that’s knowing how to do things — technology changes how we learn skills. Now we often learn through videos, apps and online platforms. We don’t just learn from someone teaching us in person or figuring things out by trial and error anymore. For example, you can learn lab techniques, coding or practical tasks by following digital guides step by step. This makes learning faster and easier to access. More people can join in creating knowledge because of this.
                
                But technology can also make us less directly involved in the process. Automated tools let us finish tasks without really understanding how they work. Take software doing calculations for you or machines carrying out procedures. You might know how to use the tool but not why it works that way. So procedural knowledge becomes more efficient. It might also stay on the surface though, shaped by our dependence on these technological systems.`
            ],
            tech_a3: [
                `Technology also affects how we create propositional knowledge — knowing that something is true — by influencing how we come up with claims, choose which ones matter and share them. Search engines and algorithms decide which information shows up when we look for something. This affects what we accept as true.
                
                The speed and amount of information online make it easy to find knowledge claims. But it’s hard to judge if they’re good. With so much stuff out there, figuring out what’s reliable is a big challenge. AI can even generate answers and explanations now. This makes us wonder who’s responsible for those ideas. They come from a system not a human thinking things through directly, after all.
                
                In the end, propositional knowledge gets created and spread faster than before. Whether we can trust it depends on our ability to think critically and be aware of what technology can’t do.`
            ]
        };
    }
    
    // 添加或更新单个文本
    addText(key, text) {
        this.texts[key] = text;
    }
    
    // 添加多个文本（用于数组）
    addTexts(key, texts) {
        this.texts[key] = texts;
    }
    
    // 获取指定键的文本，如果不存在则返回默认文本
    getText(key = 'default') {
        return this.texts[key] || this.texts.default;
    }
    
    // 获取多个文本（返回数组）
    getTexts(key) {
        return Array.isArray(this.texts[key]) ? this.texts[key] : [];
    }
}

// 创建实例供页面使用
const content = new Content();

