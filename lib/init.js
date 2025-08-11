const fs = require('fs');
const path = require('path');
const { copyTemplate, promptUser, checkFilesToOverwrite } = require('./utils.js');

async function init(claudeCodeFlag = false) {
  console.log('🚀 Initializing AI Framework...\n');

  // Determine platform first (needed for file checking)
  let platform;
  
  if (claudeCodeFlag) {
    platform = 'claude-code';
  } else {
    // Interactive selection (only Claude Code available for now)
    console.log('Select AI platform:');
    console.log('  1) Claude Code');
    console.log('  [More platforms coming soon]');
    
    const choice = await promptUser('Enter choice (1): ');
    if (choice === '1' || choice === '' || choice.toLowerCase().includes('claude')) {
      platform = 'claude-code';
    } else {
      console.log('❌ Invalid choice. Only Claude Code is available currently.');
      return;
    }
  }

  // Check for files that will actually be overwritten
  const filesToOverwrite = checkFilesToOverwrite(platform);
  if (filesToOverwrite.length > 0) {
    console.log('⚠️  The following files will be overwritten:');
    filesToOverwrite.forEach(file => console.log(`   ${file}`));
    
    const overwrite = await promptUser('Continue and overwrite these files? (y/n): ');
    if (!overwrite.toLowerCase().startsWith('y')) {
      console.log('❌ Initialization cancelled.');
      return;
    }
  }

  try {
    // Always copy universal .llm structure
    console.log('📁 Setting up universal .llm framework...');
    await copyTemplate('templates/.llm', '.llm');
    
    // Copy platform-specific files
    console.log(`🎯 Setting up ${platform} specific files...`);
    await copyTemplate(`platforms/${platform}/templates`, '.');
    
    console.log('\n✅ AI Framework initialized successfully!');
    console.log('\nNext steps:');
    
    if (platform === 'claude-code') {
      console.log('  1. Install Context7 MCP:');
      console.log('     claude mcp add context7 -- npx -y @upstash/context7-mcp');
      console.log('  2. Generate project context:');
      console.log('     @llm-generator analyze this project and generate context');
      console.log('  3. Create specialized agents:');
      console.log('     @agent-builder create specialized agents for this project');
    }
    
    console.log('\n📖 Read .llm/README.md for complete documentation.');
    
  } catch (error) {
    console.error('❌ Error during initialization:', error.message);
    throw error;
  }
}

module.exports = { init };