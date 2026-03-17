# Deploy Angular build to repository root for GitHub Pages
# Run this script from the angular-build directory

# Build the project
ng build --configuration production

# Copy built files to the repository root
$distPath = ".\dist"
$repoRoot = ".."

# Remove old files from repo root (except for specific folders/files to keep)
$keepItems = @(".git", "angular-build", "assets", "docs", "CNAME", "LICENSE", "README.md")

Get-ChildItem $repoRoot -Force | ForEach-Object {
    $itemName = $_.Name
    if ($keepItems -notcontains $itemName) {
        Remove-Item -Path $_.FullName -Recurse -Force -ErrorAction SilentlyContinue
    }
}

# Copy dist contents to repo root
Copy-Item -Path "$distPath\*" -Destination $repoRoot -Recurse -Force

Write-Host "Deployment complete! Files copied to repository root."
Write-Host "Commit and push changes to deploy to GitHub Pages."
