function parseRobots(content) {
  const lines = content.split('\n');

  const result = {
    agents: {},
    Sitemap: []
  };

  let currentAgent = null;

  for (let line of lines) {
    line = line.trim();

    if (!line || line.startsWith('#')) continue;

    const [key, ...rest] = line.split(':');
    const value = rest.join(':').trim();

    const lowerKey = key.toLowerCase();

    switch (lowerKey) {
      case 'user-agent': {
        currentAgent = value.toLowerCase();

        if (!result.agents[currentAgent]) {
          result.agents[currentAgent] = {
            Allow: [],
            Disallow: []
          };
        }
        break;
      }

      case 'allow': {
        if (currentAgent && value !== '') {
          result.agents[currentAgent].Allow.push(value);
        }
        break;
      }

      case 'disallow': {
        if (currentAgent && value !== '') {
          result.agents[currentAgent].Disallow.push(value);
        }
        break;
      }

      case 'sitemap': {
        if (value !== '') {
          result.Sitemap.push(value);
        }
        break;
      }

      case 'host': {
        if (value !== '') {
          result.Host = value;
        }
        break;
      }
    }
  }

  return result;
}

module.exports = parseRobots;