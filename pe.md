What is Prompt Engineering :- 

- prompt engineering is the practice of designing and refining the instruction (called prompts) given to an AI model to get better, more accurate & more useful output. 

What is LLM :- 

- LLM stands for large language model. 
- it is an AI model trained on massive amount of text data to -> 

1. understand language
2. predict the next word in a sentence 
3. Generate meaningful responce 

ex. google keyboard 

Role of LLM in Prompt Engineering :- 

- prompt engineering -> How you talk 
- LLM -> who you're talking to

- LLM's helps us to -> 

1. read our prompt 
2. Interpret our intent 
3. generate a good responce based on our prompt. 

Module 1 -> Introduction to LLM & Prompting Basics 

Descriminative AI -> 

- Descriminative AI is a AI technique that helps us to classify the data. 
- ex. 

1. Email - spam & not spam 
2. Face ID (face recognition)
3. Netflix recomendation etc..

Generative AI -> 

- in genarative AI , it not only classify the data but it generate some new data through AI. 
- ex. 

1. ChatGPT (Text generation/image)
2. MidJourney (image generation)
3. Github Copilot (code generation) etc...

Evolution of -> RNN, LSTM & transformer 

1. RNN (Recurrent Neural Network)

- An RNN is a type of neural network designed to process sequencial data like.. 
    - text
    - speech 
    - time series etc.. 
- it process the data step by step. 
- it remember privious information using hidden state in RNN. 

Previous inf. -> RNN -> new Inf. 

Ex. sentence - "i love AI" 
RNN reads it - "i" -> then "love" -> then "AI" 
(like keeping memory of previous word)

The dis-advantages are -> 

1. it can't remember a long sentence because of short memory. 
2. struggle with reading long sentence.

2. LSTM :- 

- it stands for long short-term memory. 
- it is an improved version of RNN 

How LSTM works -> 

- LSTM uses some gates to control info. 
    - forget gate -> removes the useless data
    - input gate -> adds new data/ info. 
    - output gate -> decides whats the output

- basically it acts like a "smart memory system". 

Advantages -> 

- it solve RNN's memory problem.
- works well for 
    - language translation 
    - speech recognition 
    - Time-series prediction 

3. Transformer -> 

- transformer is a Modern AI architecture that power LLM's (like chatGPT).

How it works -> 

- uses self-attention mechanism. 
   (it allows to understand context , relation between words in a sequence)
- looks at all words at once , not step by step. 

ex. "the animal didn't cross the road because it was tired"

- in this ex., the transformer understand "it" refers to animal using attention mechanism. 

Advantages -> 

1. handle long context very well. 
2. Faster (processing is very first)
3. give more accurate o/p than RNN/LSTM. 

feature           RNN        LSTM       tranformer 
data processing  sequential sequential  parallel
memory            short       long       very long 
speed             slow        slow       fast
Performance       basic       better     best

Prompt Engineering -> 

- by the help of tranformer we can do the prompt engineering in a better way. 

1. long context : transformer helps to memorise the long context given in the prompt. (it works on parallel data processing)

2. contextual understanding : if we can put same word in different form then transformer also understand that word properly. 

ex. Bank ( river bank , financial bank)

- AI don't read our words , it read tokens 
- we can't take 1 token as a 1 word , although "unbelievable" word can segrigate to different token. 

ex. 

- words : "playing" -> play + ing 
- words : transformation -> trans + form + ation

- AI didn't understand words directlly so we can segrigate differnt token to form prefix(re-, un-) & suffix (-ing, -ation, -ed) so that AI can recreate some words by recognize it properly. 

Token -> 

AI Tools            approx token limit 

chatGPT             ~128,000 to ~256,000 token 
                    (depending on version)

Gemini              ~1,000,000 t0 ~2,000,000 tokens

Claude              ~200,000 tokens (standard) 
                    upto ~1,000,000 token (enterprize)

perplexity          ~128,000 to ~200,000 tokens 

Context window of differnt LLMS :- 

1. ChatGPT -> excelent for long discussion, essays , emails , summarization within it's ~128k - ~256k tokens.

2. Gemini -> processing multiple books, large size docs at once, large codebase analysis in one snapshot, complex project tasks across long charts etc.. 

3. Claude -> it ideal for large document reasoning/scanning with more safely. 

4. Perplexity AI -> uses in various backend model. 

Structure Prompting -> 

1. Role (person role)
2. Context 
3. Task (what action we perform)
4. Constraints (negative constraints)
5. Output 

we can take some scenario for prompting -> 

use case - 1 : writing & content creation 

simple prompt -> write a cold email for google internship.

engineering prompt -> "act as a carrier coach. write a personalized cold email to a recruiter at google for a data science internship. Mention my proficiency in python & SQL. keep the tone profesional but eager & limit it to 150 words" 

use case 2 : coding & technical task

simple prompt -> fix this code (some code)

E. prompt -> "act as a senior python developer. review the following code for a log-in logics, identify potential security vulnarabilities and logical errors. provide the corrected code with comments explaining each fix."

Module 2 -> core prompting technique -> 

1. Zero shot prompting : "direct order"

- in this prompting we didn't give any example to AI but we provide a small instruction and we think that by the help of pre-trained knowledge , AI will provide the answers. 

prompt -> classify the sentiment of this review: "the battery life of this laptop is amazing but the screen is a bit dull" 

output -> mixed/neutral

2. Few shot prompting : the "pattern maker"

- we have faced some prbm on zero shot prompting because sometimes it failed but in few shot prompting, we have to give 3,4 example to understand the pattern of our prompt then it gives a good response. 

ex. give the customer feedback in json format. 
input/prompt -> 
example 1 : i love the pizza! -> {"sentiment": "positive", "label": 1}
example 2 : the delivery was late -> {"sentiment":"negative", "label":0}
example 3 : the food was okay -> {"s":"neutral", "label":0.5}

3. chain of thought (COT) : the "logical thinker"

- this is the most imp. technique to solve complex problem. if we can put anything in AI , and we give prompt "think step by step" but AI will look in full sentence and create the logic then give the output. so it's create a little "hallucination" / confusion. 

- use case ->
- prompt -> "a farmer has 15 sheep. All but 8 die. How much are left ? let's think step-by-step" 

1. total sheep - 15 
2. all but 8 die means only 8 are left but rest sheep are die. 
3. so only 8 sheeps are present. 

final ans - 8 

4. Instruction Prompting : framework

- in this prompting we can put step by step instruction so that it will give the requeired output. 

- persona (role) : "act as a senior python dev"
- constraints(limit) : "don't use external libraries. keep code under 20 lines" 
- specific instruction : "explain the code like i am 5 years old" 

use case -> writting professional email

prompt -> "act as a polite HR manager. write a rejection email for a candidate who cleared the interview but we can't hire due to budget cuts. Mention that we will keep their cv for future. constraints -> keep it simple & empathetic , don't mention the exact budghet amount"


 Module 3 - Advanced Prompt Engineering Frameworks ->
 

1. ReAct Framework (reason + Action)

- React means reason + acting.
- Before some time AI only think or AI only give the result but now in ReAct framework AI will work on the basis of a loop. Like it will think first then give the result then think again whether it's right or wrong then again give the result.

Use case -> Researching a market trend using AI with browsing capabilities (like chatGPT with search or Perplexity)

Prompt -> "Solve the following task using a
thought-action-observation loop. Task: analyze the current stock performance of NVIDIA compared to its competitors in the last 7 days.

Instruction: 
1. Start with a 'thought' (what do we need to find?)
2. perform an Action (search for the specific data)
3. provide an observation (summarize what we find)
4. repeat until you provide a final recommendation fro a short-term investor."

2. Three of Thoughts (TOT)

- Three of Thoughts is more efficient that "chain of thoughts", we can say TOT is a big brother of COT.
- In "COT" AI can think for only one line but in "TOT" it can segregate one line into different branches / nodes like as a tree then think it separately.  

Use Case -> In TOT the strategies are suppose will take A, B & C in these 3 branches of a line suppose we find B will work better than C / A then they cancel C / A only take B as the resultant.

Prompt -> "Imagine three different experts are brainstorming a solution to this problem : how can a small local bakery increases it's sales by 50% in 3 months with a budget of only $500 ?"