// nicely group external libraries so we know which ones are external 
// This also helps performance tremendously, as I've read somewhere that adding external libraries in your <head> leads to extra connections being setup, slowing down your site. I'm so smart! 
document.write("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\">");
document.write("<script src=\"https://code.jquery.com/jquery-1.12.4.js\"></script>");
document.write("<script src=\"https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.js\"></script>");