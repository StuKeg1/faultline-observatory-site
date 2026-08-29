from pathlib import Path

path = Path('src/data/records/FR-AI-0001.js')
text = path.read_text()
marker = 'id: "IN-006"'
start = text.find(marker)
if start < 0:
    raise SystemExit('FR-AI-0001/IN-006 missing')
end = text.find('\n    }\n  ],', start)
if end < 0:
    raise SystemExit('FR-AI-0001/IN-006 terminal object boundary missing')
block = text[start:end]
if 'sources:' not in block:
    sources = '''
      sources: [
        {
          citation: "Chen et al., ‘Reasoning Models Don't Always Say What They Think’ (Anthropic, 2025)",
          url: "https://www.anthropic.com/research/reasoning-models-dont-say-think",
        },
        {
          citation: "Arcuschin et al., ‘Chain-of-Thought Reasoning In The Wild Is Not Always Faithful’ (2025)",
          url: "https://arxiv.org/abs/2503.08679",
        },
        {
          citation: "Lanham et al., ‘Measuring Faithfulness in Chain-of-Thought Reasoning’ (2023)",
          url: "https://arxiv.org/abs/2307.13702",
        },
        {
          citation: "Turpin et al., ‘Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting’ (NeurIPS 2023)",
          url: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/ed3fea9033a80fea1376299fa7863f4a-Abstract.html",
          doi: "10.52202/075280-3275",
        },
        {
          citation: "Lindsey et al., ‘On the Biology of a Large Language Model’ (Transformer Circuits, 2025)",
          url: "https://transformer-circuits.pub/2025/attribution-graphs/biology.html",
          locator: "Chain-of-thought Faithfulness",
        },
      ],'''
    path.write_text(text[:end] + sources + text[end:])
