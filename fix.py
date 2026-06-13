f = open('netlify.toml', 'w') 
f.write('[build]\n  command = "npm ci --include=dev && npm run build"\n  publish = "dist"\n\n[[redirects]]\n  from = "/*"\n  to = "/index.html"\n  status = 200\n') 
f.close() 
